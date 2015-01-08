///<reference path="_definitions.ts"/>
module BunnyMark
{
    export class Rectangle
    {
        public x:number;
        public y:number;
        public width:number;
        public height:number;

        constructor(x:number = 0 ,y:number = 0,w:number = 0,h:number = 0)
        {
            this.x = x;
            this.y = y;
            this.width = w;
            this.height = h;
        }
    }

}