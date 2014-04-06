///<reference path="_definitions.ts" />
module stagl
{
    export class Texture {

        private _glTexture: WebGLTexture;
        private _streamingLevels: number;

        constructor(streamingLevels: number) {
            this._glTexture = Context3D.GL.createTexture();
            this._streamingLevels = streamingLevels;
        }

        public uploadFromBitmapData(source: HTMLImageElement, miplevel: number /* uint */ = 0): void {
            this.uploadFromImage(source, miplevel);
        }
        public uploadFromImage(source: HTMLImageElement, miplevel: number /* uint */ = 0): void {
            Context3D.GL.bindTexture(Context3D.GL.TEXTURE_2D, this._glTexture);
            // Context3D.GL.pixelStorei(Context3D.GL.UNPACK_FLIP_Y_WEBGL, 1);
            Context3D.GL.texImage2D(Context3D.GL.TEXTURE_2D,
                miplevel,
                Context3D.GL.RGBA,
                Context3D.GL.RGBA,
                Context3D.GL.UNSIGNED_BYTE,
                source);
            //�Ŵ�
            Context3D.GL.texParameteri(Context3D.GL.TEXTURE_2D, Context3D.GL.TEXTURE_MAG_FILTER, Context3D.GL.LINEAR); //�ٶ���Ч����
            if (this._streamingLevels == 0) {
                //��С
                Context3D.GL.texParameteri(Context3D.GL.TEXTURE_2D, Context3D.GL.TEXTURE_MIN_FILTER, Context3D.GL.LINEAR);
            } else {
                Context3D.GL.texParameteri(Context3D.GL.TEXTURE_2D, Context3D.GL.TEXTURE_MIN_FILTER, Context3D.GL.LINEAR_MIPMAP_LINEAR); //linnear����mipmap,����Ҳlinear
                Context3D.GL.generateMipmap(Context3D.GL.TEXTURE_2D);
            }


            if (!Context3D.GL.isTexture(this._glTexture)) {
                throw new Error("Error:Texture is invalid");
            }
            //bind null �᲻��ʾ��ͼ
            //Context3D.GL.bindTexture(Context3D.GL.TEXTURE_2D, null);
        }
    }
}