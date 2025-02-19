import { useState } from "react";
import { Search, Download, ChartBar, Users, MapPin, DollarSign, User, Radar, Info, ChevronDown } from "lucide-react";
import MainSidebar from "@/components/MainSidebar";
import { Radar as RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, RadarChart as RechartsRadarChart } from 'recharts';
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import DemographicsMap from "@/components/DemographicsMap";

const tabs = [
  { id: "WHO_DEMO", label: "WHO", subLabel: "demographics" },
  { id: "WHO_PSYCHO", label: "WHO", subLabel: "psychographics" },
  { id: "WHAT", label: "WHAT" },
  { id: "WHY", label: "WHY" },
  { id: "SO_WHAT", label: "SO WHAT" }
];

const psychographicData = [
  { subject: 'Op', A: 80, fullName: 'Openness' },
  { subject: 'Co', A: 65, fullName: 'Conscientiousness' },
  { subject: 'Ex', A: 45, fullName: 'Extraversion' },
  { subject: 'Ag', A: 70, fullName: 'Agreeableness' },
  { subject: 'Ne', A: 30, fullName: 'Neuroticism' },
  { subject: 'RT', A: 85, fullName: 'Risk Tolerance' },
  { subject: 'In', A: 75, fullName: 'Innovation' },
  { subject: 'PS', A: 40, fullName: 'Price Sensitivity' },
  { subject: 'BL', A: 60, fullName: 'Brand Loyalty' },
  { subject: 'SI', A: 72, fullName: 'Social Impact' },
  { subject: 'TA', A: 88, fullName: 'Tech Adoption' },
  { subject: 'QF', A: 78, fullName: 'Quality Focus' },
  { subject: 'Su', A: 65, fullName: 'Sustainability' },
  { subject: 'SS', A: 45, fullName: 'Status Seeking' },
  { subject: 'Im', A: 35, fullName: 'Impulsiveness' },
  { subject: 'Tr', A: 25, fullName: 'Traditionalism' },
];

const colorMap = {
  'Op': 'bg-[#9b87f5] text-white',
  'Co': 'bg-[#7E69AB] text-white',
  'Ex': 'bg-[#6E59A5] text-white',
  'Ag': 'bg-[#0EA5E9] text-white',
  'Ne': 'bg-[#33C3F0] text-white',
  'RT': 'bg-[#1EAEDB] text-white',
  'In': 'bg-[#F97316] text-white',
  'PS': 'bg-[#FEC6A1] text-gray-700',
  'BL': 'bg-[#FEF7CD] text-gray-700',
  'SI': 'bg-[#D6BCFA] text-gray-700',
  'TA': 'bg-[#E5DEFF] text-gray-700',
  'QF': 'bg-[#9b87f5] text-white',
  'Su': 'bg-[#7E69AB] text-white',
  'SS': 'bg-[#6E59A5] text-white',
  'Im': 'bg-[#0EA5E9] text-white',
  'Tr': 'bg-[#33C3F0] text-white',
};

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("WHO_DEMO");
  const [hoveredChip, setHoveredChip] = useState<string | null>(null);
  const totalRespondents = 1234;

  const renderContent = () => {
    switch(activeTab) {
      case "WHO_DEMO":
        return (
          <div className="grid grid-cols-2 gap-6 animate-slide-up">
            <div className="space-y-3">
              {/* Age Distribution Card */}
              <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                      Detailed breakdown of age groups across all respondents
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center gap-1.5 mb-2">
                    <ChartBar className="w-3.5 h-3.5 text-gray-400" />
                    <h3 className="text-xs font-semibold text-white">Age Distribution</h3>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">28%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">16-29</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">35%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">30-45</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">22%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">45-60</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">15%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">60+</span>
                    </div>
                  </div>
                </div>

              {/* Gender Distribution Card */}
              <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                      Distribution of gender identities in the respondent pool
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Users className="w-3.5 h-3.5 text-gray-400" />
                    <h3 className="text-xs font-semibold text-white">Gender Distribution</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">48%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">Male</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">51%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">Female</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">1%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">Other</span>
                    </div>
                  </div>
                </div>

              {/* Location Distribution Card */}
              <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                      Geographical distribution of respondents by area type
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center gap-1.5 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    <h3 className="text-xs font-semibold text-white">Location Distribution</h3>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">42%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">Copenhagen, DK</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">35%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">London, UK</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">15%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">New York, US</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">8%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">Other</span>
                    </div>
                  </div>
                </div>

              {/* Income Distribution Card */}
              <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                      Income range distribution across all respondents
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center gap-1.5 mb-2">
                    <DollarSign className="w-3.5 h-3.5 text-gray-400" />
                    <h3 className="text-xs font-semibold text-white">Income Distribution</h3>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">18%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">&lt;30k</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">45%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">30k-75k</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">25%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">75k-120k</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">12%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">&gt;120k</span>
                    </div>
                  </div>
                </div>

              {/* Ancestry Distribution Card */}
              <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                      Distribution of ancestral backgrounds among respondents
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center gap-1.5 mb-2">
                    <User className="w-3.5 h-3.5 text-gray-400" />
                    <h3 className="text-xs font-semibold text-white">Ancestry Distribution</h3>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">32%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">European</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">28%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">Asian</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">22%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">African</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">18%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">Other</span>
                    </div>
                  </div>
                </div>
            </div>
            
            {/* Right Column - Map Card */}
            <div>
              {/* Map Card */}
              <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 relative">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2 z-10" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                    Geographic distribution of respondents across major cities
                  </TooltipContent>
                </Tooltip>
                <div className="flex items-center gap-1.5 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  <h3 className="text-xs font-semibold text-white">Geographic Distribution</h3>
                </div>
                <DemographicsMap />
              </div>
            </div>
          </div>
        );
      
      case "WHO_PSYCHO":
        return (
          <div className="grid grid-cols-2 gap-6 animate-slide-up">
            <div>
              {/* Stats Card */}
              <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 relative h-full">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                    Detailed breakdown of all psychographic variables
                  </TooltipContent>
                </Tooltip>
                
                <div className="flex items-center gap-1.5 mb-4">
                  <ChartBar className="w-3.5 h-3.5 text-gray-400" />
                  <h3 className="text-xs font-semibold text-white">Stats</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 text-[11px]">
                  <div className="space-y-1.5">
                    {psychographicData.slice(0, Math.ceil(psychographicData.length / 2)).map((point) => (
                      <div 
                        key={point.subject}
                        className={`flex justify-between items-center transition-colors duration-150 ${
                          hoveredChip === point.subject ? 'bg-gray-800 rounded px-2 py-1' : ''
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${colorMap[point.subject as keyof typeof colorMap].split(' ')[0]}`} />
                          <span className="text-gray-400">
                            {point.fullName}
                          </span>
                        </div>
                        <span className="font-medium text-gray-300">
                          {point.A}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1.5">
                    {psychographicData.slice(Math.ceil(psychographicData.length / 2)).map((point) => (
                      <div 
                        key={point.subject}
                        className={`flex justify-between items-center transition-colors duration-150 ${
                          hoveredChip === point.subject ? 'bg-gray-800 rounded px-2 py-1' : ''
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${colorMap[point.subject as keyof typeof colorMap].split(' ')[0]}`} />
                          <span className="text-gray-400">
                            {point.fullName}
                          </span>
                        </div>
                        <span className="font-medium text-gray-300">
                          {point.A}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              {/* Cobweb Graph Card */}
              <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 relative">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                    Visual representation of key psychographic traits and their intensities
                  </TooltipContent>
                </Tooltip>
                
                {/* Title and chips */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Radar className="w-3.5 h-3.5 text-gray-400" />
                    <h3 className="text-xs font-semibold text-white">Psychographics</h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { text: "Adventurous", color: "bg-[#9b87f5] text-white" },
                      { text: "Creative", color: "bg-[#0EA5E9] text-white" },
                      { text: "Tech-savvy", color: "bg-[#F97316] text-white" },
                      { text: "Early Adopter", color: "bg-[#E5DEFF] text-gray-700" },
                      { text: "Quality-focused", color: "bg-[#FEC6A1] text-gray-700" },
                      { text: "Innovation-driven", color: "bg-[#D6BCFA] text-gray-700" }
                    ].map((chip) => (
                      <span
                        key={chip.text}
                        className={`px-2 py-0.5 text-[10px] rounded-full ${chip.color}`}
                      >
                        {chip.text}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Radar Chart */}
                <div className="relative mb-4">
                  <ResponsiveContainer width="100%" height={460}>
                    <RechartsRadarChart data={psychographicData}>
                      <defs>
                        <linearGradient id="psychographicGradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#33C3F0" stopOpacity={0.6} />
                          <stop offset="50%" stopColor="#1EAEDB" stopOpacity={0.4} />
                          <stop offset="100%" stopColor="#0FA0CE" stopOpacity={0.3} />
                        </linearGradient>
                      </defs>
                      <PolarGrid stroke="#374151" />
                      <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fill: 'transparent', fontSize: 10 }}
                      />
                      <RadarChart
                        name="Psychographic Profile"
                        dataKey="A"
                        stroke="#3B82F6"
                        fill="url(#psychographicGradient)"
                        fillOpacity={0.6}
                      />
                    </RechartsRadarChart>
                  </ResponsiveContainer>

                  {/* Radar vertex chips */}
                  {psychographicData.map((point, index) => {
                    const angle = (index * 360) / psychographicData.length;
                    const baseRadius = 140;
                    const scaledRadius = (baseRadius * point.A) / 100;
                    const x = scaledRadius * Math.cos((angle - 90) * (Math.PI / 180));
                    const y = scaledRadius * Math.sin((angle - 90) * (Math.PI / 180));

                    return (
                      <Tooltip key={point.subject}>
                        <TooltipTrigger asChild>
                          <span
                            className={`px-2 py-0.5 text-[10px] rounded-full cursor-help absolute transform -translate-x-1/2 -translate-y-1/2 z-10 ${colorMap[point.subject as keyof typeof colorMap]} transition-transform duration-150 ${hoveredChip === point.subject ? 'scale-125' : ''}`}
                            style={{
                              left: `50%`,
                              top: `50%`,
                              transform: `translate(${x}px, ${y}px)`,
                            }}
                            onMouseEnter={() => setHoveredChip(point.subject)}
                            onMouseLeave={() => setHoveredChip(null)}
                          >
                            {point.subject}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                          <div className="flex items-center gap-2">
                            <span>{point.fullName}</span>
                            <span className="font-medium text-blue-400">{point.A}</span>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="p-4 text-center text-gray-500">
            Content for {activeTab} tab coming soon...
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 font-grotesk text-[13px]">
      <MainSidebar />
      
      <div className="ml-52 p-6 animate-fade-in">
        {/* Top Section */}
        <div className="mb-8">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Explore your audience..."
              className="w-[calc(100%-260px)] px-4 py-2 pl-10 rounded-lg border border-gray-800 bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-gray-500 text-xs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2 text-gray-500 w-4 h-4" />
            
            <div className="flex items-center space-x-2 ml-3">
              <button className="px-3 py-1.5 text-[11px] font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                Save DNA
              </button>
              <button className="px-3 py-1.5 text-[11px] font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center whitespace-nowrap">
                <Download className="w-3 h-3 mr-1" />
                Export
              </button>
            </div>
          </div>
          
          <p className="mt-2 text-[11px] text-gray-400">
            438 out of 10000 survey respondents have responses relevant to the search term "Holiday". Here is their "DNA".
          </p>
        </div>

        {/* Tabs and Content Container */}
        <div>
          {/* Tabs */}
          <div>
            <div className="flex w-full bg-gray-800 rounded-t-lg">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-4 text-xs font-medium transition-colors relative ${
                    activeTab === tab.id
                      ? "text-white bg-gray-900"
                      : "text-gray-500 hover:text-gray-300 hover:bg-gray-800/80"
                  } ${index === 0 ? "rounded-tl-lg" : ""} ${
                    index === tabs.length - 1 ? "rounded-tr-lg" : ""
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <span>{tab.label}</span>
                    {tab.subLabel && (
                      <span className="text-[10px] text-gray-400 mt-0.5">
                        {tab.subLabel}
                      </span>
                    )}
                  </div>
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="bg-gray-900 rounded-b-lg p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
