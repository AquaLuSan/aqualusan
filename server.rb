#!/usr/bin/env ruby
require "socket"
require "uri"

ROOT = File.expand_path(__dir__)
PORT = 8766
TYPES = {
  ".html" => "text/html; charset=utf-8",
  ".css" => "text/css; charset=utf-8",
  ".js" => "text/javascript; charset=utf-8",
  ".svg" => "image/svg+xml",
  ".png" => "image/png",
  ".jpg" => "image/jpeg",
  ".ico" => "image/x-icon"
}

server = TCPServer.new("127.0.0.1", PORT)
warn "AquaLuSan local server http://127.0.0.1:#{PORT}"

loop do
  client = server.accept
  Thread.new(client) do |socket|
    begin
      request = socket.gets
      next unless request
      method, raw_path, = request.split
      path = URI.decode_www_form_component(raw_path.split("?").first)
      path = "/index.html" if path == "/"
      full = File.expand_path(File.join(ROOT, path))
      unless full.start_with?(ROOT) && File.file?(full)
        body = "Not found"
        socket.print "HTTP/1.1 404 Not Found\r\nContent-Type: text/plain\r\nContent-Length: #{body.bytesize}\r\nConnection: close\r\n\r\n#{body}"
      else
        body = File.binread(full)
        type = TYPES[File.extname(full)] || "application/octet-stream"
        socket.print "HTTP/1.1 200 OK\r\nContent-Type: #{type}\r\nContent-Length: #{body.bytesize}\r\nConnection: close\r\n\r\n"
        socket.write body
      end
    rescue StandardError => e
      warn e.message
    ensure
      socket.close
    end
  end
end
