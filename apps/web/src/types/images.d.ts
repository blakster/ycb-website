declare module "*.AVIF" {
  const content: import("next/image").StaticImageData;
  export default content;
}
