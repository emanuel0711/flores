"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QRCode = require("qrcode");
// Função para gerar o QR Code
function generateQRCode(data) {
    QRCode.toFile('qrcode.png', data, function (err) {
        if (err) {
            console.error('Erro ao gerar QR Code:', err);
        }
        else {
            console.log('QR Code gerado: qrcode.png');
        }
    });
}
generateQRCode('https://www.youtube.com/watch?v=lkNPCsjMBGQ');
