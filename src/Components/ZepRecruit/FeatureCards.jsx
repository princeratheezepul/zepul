export function FeatureCards() {
  const features = [
    {
      title: "One Stop Shop",
      description:
        "Your One-Stop Shop from Requisition to Onboarding: Simplify Your Hiring Process Today.",
      img: "assets/zeprecruit/zp1.png",
    },
    {
      title: "ZepDB - AI based Sourcing",
      description:
        "Your One-Stop Shop from Requisition to Onboarding: Simplify Your Hiring Process Today.",
      img: "assets/zeprecruit/zp2.png",
    },
    {
      title: "Multi-layer Screening (AI + Human)",
      description:
        "Your One-Stop Shop from Requisition to Onboarding: Simplify Your Hiring Process Today.",
      img: "assets/zeprecruit/zp3.png",
    },
    {
      title: "Comprehensive Report Card",
      description:
        "Your One-Stop Shop from Requisition to Onboarding: Simplify Your Hiring Process Today.",
      img: "assets/zeprecruit/zp4.png",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-3xl p-6 h-full"
          >
            <div className="flex flex-col">
              <div>
                <img src={feature.img} alt="" />
              </div>
              <div>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 500,
                    fontSize: "28px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  className="text-gray-600"
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "100%",
                    letterSpacing: "0em",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
