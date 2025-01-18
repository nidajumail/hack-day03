import Link from "next/link";

export default function Blog(){
    return (
       
        <div>
        {/* Page Header */}
        <div className="h-[286px] bg-[#F6F5FF] flex items-center py-16">
          <div className="container md:w-[1170px] mx-auto px-4">
            <h1 className="text-3xl text-center md:text-left font-bold mb-4">BlogPage</h1>
            <div className="flex justify-center md:justify-start items-center gap-2 text-sm">
              <Link href="/">Home</Link>
              <span>•</span>
              <Link href="/pages">Pages</Link>
              <span>•</span>
              <span className="text-[#FB2E86]">Contact Us</span>
          
         
              </div>
              </div>
              </div>
        </div>
    );}
