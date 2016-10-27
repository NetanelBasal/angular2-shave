declare module "shave" {
  export interface IShaveOptions {
    classname? : string,
    character? : string
  }
  export default function shave( selector : string|Node, maxHeight : number, options? : IShaveOptions ) : void;
}