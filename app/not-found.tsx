import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001133] via-[#001a3c] to-[#002755] pb-40">
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        {/* 404 Content */}
        <div className="text-center max-w-md mx-auto">
          {/* Large 404 Number */}
          <h1 className="text-8xl md:text-9xl font-bold text-[#AEEE6A] mb-4 animate-pulse">
            404
          </h1>

          {/* Error Message */}
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Page Not Found
          </h2>

          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or is
            currently under development.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="flex items-center justify-center text-black font-semibold hover:scale-105 transition-all duration-300 text-lg w-full sm:w-[180px] h-[50px] rounded-xl bg-[#AEEE6A] shadow-[7px_5px_33.9px_0px_#00817B] hover:shadow-[0px_8px_40px_0px_#00817B]"
            >
              Go Home
            </Link>

            <Link
              href="/about"
              className="flex items-center justify-center text-[#AEEE6A] font-semibold border-2 border-[#AEEE6A] hover:bg-[#AEEE6A] hover:text-black transition-all duration-300 text-lg w-full sm:w-[180px] h-[50px] rounded-xl"
            >
              Learn About Us
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-32 h-32 border border-[#AEEE6A]/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-[#AEEE6A]/15 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#AEEE6A]/10 rounded-full animate-pulse delay-700"></div>
        </div>
      </div>
    </div>
  );
}
