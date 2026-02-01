#!/usr/bin/env python3
"""
带 CORS 支持的 HTTP 服务器
用于本地开发，解决跨域问题
"""
from http.server import HTTPServer, SimpleHTTPRequestHandler
import sys

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # 添加 CORS 头
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

if __name__ == '__main__':
    port = 8000
    server_address = ('', port)
    httpd = HTTPServer(server_address, CORSRequestHandler)
    print(f'启动带 CORS 支持的服务器: http://localhost:{port}')
    print(f'访问地址: http://localhost:{port}/HuaPai.html')
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print('\n服务器已停止')
        sys.exit(0)
