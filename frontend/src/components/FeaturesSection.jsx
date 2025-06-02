import { AcademicCapIcon, CodeBracketIcon, RocketLaunchIcon, ChartBarIcon, ArrowPathIcon, ViewfinderCircleIcon } from "@heroicons/react/24/outline";

const features = [
  {
    title: "AI-powered",
    description: "Intelligent tools that help you create and maintain your academic website with minimal effort.",
    icon: <CodeBracketIcon className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Made for Academics",
    description: "Showcase your research, publications, teaching, and CV all in one place.",
    icon: <AcademicCapIcon className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Launch in Minutes",
    description: "QuickSite is designed for speed — get your professional site live fast.",
    icon: <RocketLaunchIcon className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Explore Community",
    description: "Discover academic websites created by Ph.D. students, faculty, researchers, and scientists.",
    icon: <ViewfinderCircleIcon className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Stay updated",
    description: "Owlstown gives you the tools to keep your website updated easily. Update your list of publications with a click of a button.",
    icon: <ArrowPathIcon className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Pageviews and analytics",
    description: "View daily website pageviews in beautiful graphs. You can also add Google Analytics for additional insights into your website traffic.",
    icon: <ChartBarIcon className="w-10 h-10 text-blue-600" />, 
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Why Choose QuickSite?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
