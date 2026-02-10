import {GlobalOutlined,
   CheckCircleOutlined,
    SearchOutlined, RobotOutlined, RocketOutlined, AppstoreOutlined,
  SafetyOutlined,AimOutlined, DeploymentUnitOutlined, FileDoneOutlined,LineChartOutlined} from '@ant-design/icons'

const Styles = {
  fontSize:'22px', padding:'15px',color:'white',marginBottom:'5px',
  borderRadius:'10px'
}
export const homeFeatures =[
  {
    "icon":<GlobalOutlined style={{...Styles,background:'#5682B1'}}/>,
    "title": "Public Visibility",
    "description": "Establish your online presence with a permanent listing accessible to users, search engines, and AI systems worldwide.",
    "highlights": ["Always Accessible"],
    "color":'#5682B1'
  },
  {
    "icon":<CheckCircleOutlined style={{...Styles,background:'#4caf50'}}/>,
    "title": "Execution Verified",
    "description": "Earn an exclusive badge confirming that work was directly executed and delivery-verified by The Great List.",
    "highlights": ["Verified Credibility"],
    "color":'#4caf50'
  },
  {
    "icon":<SearchOutlined style={{...Styles,background:'#8fb1d6'}}/>,
    "title": "SEO Optimized",
    "description": "Your listing is optimized for search engines, helping potential customers discover your business organically.",
    "highlights": "Higher Rankings",
    "color":"#8fb1d6"
  },
  {
    "icon":<AppstoreOutlined style={{...Styles,background:'#000000'}}/>,
    "title": "Neutral Platform",
    "description": "Open and impartial listings without endorsements or branding on external sites. A trusted reference index for all.",
    "highlights": "Fair & Transparent",
    "color":"#000000"
  },
  {
    "icon":<RobotOutlined style={{...Styles,background:'#c55353'}}/>,
    "title": "AI Systems Ready",
    "description": "Structured data ensures your business is discoverable by AI assistants and modern search systems.",
    "highlights": "Future-Proof",
    "color":'#c55353'
  },
  {
    "icon":<RocketOutlined style={{...Styles,background:'#3a3a3a'}}/>,
    "title": "Quick & Easy",
    "description": "Simple process to list your business. Get your company profile live and start building your online presence today.",
    "highlights": "Fast Setup",
    "color":"#3a3a3a"
  }
]

export const homeAdvantage = [
  {
    "icon":<SafetyOutlined style={{...Styles, backgroundColor:"white", color:'#c55353'}}/>,
    "title": "Trusted Reference",
    "description": "Open and neutral platform that serves as a reliable reference for users, search engines, and AI systems worldwide."
  },
  {
    "icon":<CheckCircleOutlined style={{...Styles, backgroundColor:"white",color:'#4caf50'}}/>,
    "title": "Verification Badge",
    "description": "Earn the exclusive Execution Verified badge that confirms work was directly executed and delivery-verified by The Great List."
  },
  {
    "icon":<AimOutlined style={{...Styles, backgroundColor:"white", color:'#3f648f'}}/>,
    "title": "No Endorsements",
    "description": "Neutral listings without bias. We don't endorse businesses or place our branding on external websites—just pure visibility."
  },
  {
    "icon":<DeploymentUnitOutlined style={{...Styles, backgroundColor:"white", color:'#3f648f'}}/>,
    "title": "Maximum Reach",
    "description": "Your listing is accessible to all—users searching online, search engine crawlers, and AI-powered assistants discovering businesses."
  }
]



export const homeProcess =[
  {
    "icon":<FileDoneOutlined style={{...Styles,color:'#739EC9'}}/>,
    "color":"#739EC9",
    "step": "01",
    "title": "Submit Your Info",
    "description": "Fill out a simple form with your business details, including company name, description, services, and contact information."
  },
  {
    "icon":<CheckCircleOutlined style={{...Styles,color:'#5682B1'}}/>,
    "color":"#5682B1",
    "step": "02",
    "title": "We Review & Publish",
    "description": "Our team reviews your submission to ensure quality and accuracy, then publishes your listing to the directory."
  },
  {
    "icon":<LineChartOutlined style={{...Styles,background:'#4caf50'}}/>,
    "color":"#4caf50",
    "step": "03",
    "title": "Get Discovered",
    "description": "Your business is now visible to users, search engines, and AI systems. Watch your online presence grow organically."
  }
]


