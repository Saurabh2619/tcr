// import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="mx-auto">
   Hello <span className="font-bold">SRH</span>A layout is UI that is shared between multiple pages. On navigation, layouts preserve state, remain interactive, and do not rerender.

You can define a layout by default exporting a React component from a layout file. The component should accept a children prop which can be a page or another layout.

For example, to create a layout that accepts your index page as child, add a layout file inside the app directory:
   </div>

    </>
  );
}
