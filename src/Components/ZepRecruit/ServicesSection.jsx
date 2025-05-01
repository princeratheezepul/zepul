export function ServicesSection() {
  return (
    <section className="container mx-auto px-4 py-16 ">
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2
            className="mb-6"
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 500,
              fontSize: "clamp(36px, 5vw, 58px)", // responsive from 36px to 58px
              lineHeight: "100%",
              letterSpacing: "-0.02em",
            }}
          >
            Explore Our Services Tailored to Your Hiring Needs
          </h2>
        </div>
        <div>
          <p
            className="text-[#4D4D4D] mb-4"
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "-0.05em", // -5%
            }}
          >
            Explore a wide range of full-time, Pay per Hour, Pay per Hire
            services across diverse geographies and industries.
          </p>

          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "-0.05em",
              color: "#4d4d4d", // matches your --sub-title variable
              marginBottom: "1rem",
            }}
          >
            Zepul goes beyond candidate matching—we offer a complete suite of
            services to streamline your recruitment process and enable smarter
            hiring decisions.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="border border-gray-200 rounded-3xl p-6 flex flex-col">
          <h3
            className="mb-4"
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 500,
              fontSize: "28px", // base/mobile
              lineHeight: "100%",
              letterSpacing: "0",
            }}
          >
            <span className="lg:hidden">FullTime</span>
            <span
              className="hidden lg:inline"
              style={{
                fontSize: "38px",
              }}
            >
              FullTime
            </span>
          </h3>

          <img
            src="assets/zeprecruit/zp5.png"
            alt=""
            className="  mx-auto my-auto w-[25rem]"
          />
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 400,
              fontSize: "22px",
              lineHeight: "100%",
              letterSpacing: "-0.05em",
              marginTop: "auto",
            }}
          >
            Candidate on customer payroll and payment to us would be a one-time
            incident. (% of candidate CTC)
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="border border-gray-200 rounded-3xl p-6 flex flex-col h-full">
            <h3
              className="mb-4"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 500,
                fontSize: "28px", // base/mobile
                lineHeight: "100%",
                letterSpacing: "0",
              }}
            >
              <span className="lg:hidden">Contractual</span>
              <span
                className="hidden lg:inline"
                style={{
                  fontSize: "38px",
                }}
              >
                Contractual
              </span>
            </h3>

            <div className="flex items-center justify-center mb-4">
              <img
                src="assets/zeprecruit/zp6.png"
                className="w-[12rem]"
                alt=""
              />
            </div>
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 400,
                fontSize: "22px",
                lineHeight: "100%",
                letterSpacing: "-0.05em",
                marginTop: "auto",
              }}
            >
              Candidate on our payroll and payment to us would be monthly
              recurring.
            </p>
          </div>
          <div className="border border-gray-200 rounded-3xl p-6 flex flex-col h-full">
            <h3
              className="mb-4"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 500,
                fontSize: "28px", // base/mobile
                lineHeight: "100%",
                letterSpacing: "0",
              }}
            >
              <span className="lg:hidden">Gig Workforce</span>
              <span
                className="hidden lg:inline"
                style={{
                  fontSize: "38px",
                }}
              >
                Gig Workforce
              </span>
            </h3>
            <div className="flex items-center justify-center mb-4">
              <img
                src="assets/zeprecruit/zp8.png"
                className="w-[12rem]"
                alt=""
              />
            </div>
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 400,
                fontSize: "22px",
                lineHeight: "100%",
                letterSpacing: "-0.05em",
                marginTop: "auto",
              }}
            >
              Small scale project—we engage resources for the specified project
              time and the payment would be on an hourly basis.
            </p>
          </div>
        </div>

        <div className="border border-gray-200 rounded-3xl p-6 flex flex-col">
          <h3
            className="mb-4"
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 500,
              fontSize: "28px", // base/mobile
              lineHeight: "100%",
              letterSpacing: "0",
            }}
          >
            <span className="lg:hidden">Projects</span>
            <span
              className="hidden lg:inline"
              style={{
                fontSize: "38px",
              }}
            >
              Projects
            </span>
          </h3>
          <div className="flex items-center justify-center mb-4 my-auto">
            <img
              src="assets/zeprecruit/zp9.png"
              className="w-[20rem] lg:w-[25rem] "
              alt=""
            />
          </div>
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 400,
              fontSize: "22px",
              lineHeight: "100%",
              letterSpacing: "-0.05em",
              marginTop: "auto",
            }}
          >
            Medium to large scale development projects wherein we take care of
            end-to-end project management including resource allocation until
            project completion.
          </p>
        </div>
      </div>
    </section>
  );
}
