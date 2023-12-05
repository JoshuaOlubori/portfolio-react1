import Work1 from '../../assets/portfolio_images/work1.jpg';
import Work2 from '../../assets/portfolio_images/cchs.png';
import Work3 from '../../assets/portfolio_images/uk_road_accidents.png';
import Work4 from '../../assets/portfolio_images/adw.png';
import Work5 from '../../assets/portfolio_images/gun_sales.jpg';
import Work6 from '../../assets/portfolio_images/call_centre_insights.png';
import Work7 from '../../assets/portfolio_images/customer_retention.jpg';
import Work8 from '../../assets/portfolio_images/tweet.png';
import Work9 from '../../assets/portfolio_images/hr.JPG';
import Work10 from '../../assets/portfolio_images/lead_aq.png';
import Work11 from '../../assets/portfolio_images/sleep.jpg'

export const projectsData = [
    {
        id: 0,
        image: Work11,
        title: "Exploring Relationships of Variables in Sleep Data With Regression",
        category: "Playground",
        code_link: 'https://joshuaolubori.onrender.com/posts/2023-11-18_sleep-disorders/',
        demo_link: 'https://joshuaolubori.onrender.com/posts/2023-11-18_sleep-disorders/',
        tech: ['R']

    },
    {
        id: 1,
        image: Work1,
        title: "COVID-19 Prevalence in Nigeria",
        category: "Projects",
        code_link: 'https://github.com/JoshuaOlubori/Covid19-in-Nigeria/tree/main',
        demo_link: 'https://public.tableau.com/app/profile/joshua1294/viz/Covid-19InNigeria/Dashboard',
        tech: ['Python', 'Tableau']

    },
    {
        id: 2,
        image: Work2,
        title: "Admin app for Local High School",
        category: "Projects",
        code_link: 'https://github.com/JoshuaOlubori/chief-cornerstone-high-school-db-app',
        demo_link: 'https://github.com/JoshuaOlubori/chief-cornerstone-high-school-db-app',
        tech: ['Python', 'Flask'],

    },
    {
        id: 3,
        image: Work3,
        title: "Tracking Road Accidents & Casualties in the UK",
        category: "Playground",
        code_link: 'https://github.com/JoshuaOlubori/UK-Road-Accident-Casualties',
        demo_link: 'https://app.powerbi.com/view?r=eyJrIjoiYjZiNDYwMTctY2EwOC00NGQ2LWJmOGEtMzVlN2I2YTFlZTEwIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&embedImagePlaceholder=true',
        tech: ['Power BI']
    },
    {
        id: 4,
        image: Work4,
        title: "My take on the AdventureWorks database with PowerBI",
        category: "Projects",
        code_link: 'https://github.com/JoshuaOlubori/Adventure-works',
        demo_link: 'https://app.powerbi.com/view?r=eyJrIjoiNzEwMmY3OWMtNmU3Zi00ZWU3LWFkNmYtYjQ1NGMwZjBjNjNiIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&embedImagePlaceholder=true',
        tech: ['Microsoft Excel','Power BI', 'MySQL']
    },
    {
        id: 5,
        image: Work5,
        title: "Year-by-year Analysis on Gun Sales in the U.S",
        category: "Projects",
        code_link: 'https://github.com/JoshuaOlubori/NCIS-FBI-Gun-Data-Analysis',
        demo_link: 'https://github.com/JoshuaOlubori/NCIS-FBI-Gun-Data-Analysis',
        tech: ['Python', 'Jupyter']
    },
    {
        id: 6,
        image: Work6,
        title: "Designing a Tableau Dashboard for Call Center Insights",
        category: "Playground",
        code_link: 'https://public.tableau.com/views/pwc-call-centre-trends/Dashboard?:language=en-GB&:display_count=n&:origin=viz_share_link',
        demo_link: 'https://public.tableau.com/views/pwc-call-centre-trends/Dashboard?:language=en-GB&:display_count=n&:origin=viz_share_link',
        tech: ['Tableau']
    },
    {
        id: 7,
        image: Work7,
        title: "Visualizing Data for Customer Retention Using PowerBI (PwC Internship)",
        category: "Playground",
        code_link: 'https://github.com/JoshuaOlubori/Data-Science-Analytics-Portfolio-Projects/tree/main/PwC%20Customer%20Retention/',
        demo_link: 'https://drive.google.com/file/d/1fhWkYH1cs2Ca4C5S7KoZQ9q5p2ChFzfY/view?usp=share_link',
        tech: ['Power BI']
    },
    {
        id: 8,
        image: Work8,
        title: "Tweet Analysis with Python",
        category: "Projects",
        code_link: 'https://github.com/JoshuaOlubori/Python-Tweet-Analysis/blob/main/wrangle_act.ipynb',
        demo_link: 'https://www.kaggle.com/code/joshuaolubori/tweet-data-wrangling-and-analysis',
        tech: ['Python', 'pandas', 'Canva']
    },
    {
        id: 9,
        image: Work9,
        title: "HR Insights with MySQL and PowerBI",
        category: "Projects",
        code_link: 'https://github.com/JoshuaOlubori/sql-employee-analysis-a',
        demo_link: 'https://joshuaolubori.my.canva.site/project-001',
        tech: ['Microsoft Excel', 'MySQL', 'Canva']
    },
    {
        id: 10,
        image: Work10,
        title: "Lead Acquisition Analysis with Tableau",
        category: "Playground",
        code_link: 'https://drive.google.com/drive/folders/1CcXckXmaF56CKXI5JjVgHrvesY19t_WO?usp=share_link',
        demo_link: 'https://public.tableau.com/views/toptal-analytics/Dashboard?:language=en-GB&publish=yes&:display_count=n&:origin=viz_share_link',
        tech: ['Tableau']
    },
];


export const toolsDictionary = {
    'Power BI': 'https://img.shields.io/static/v1?style=for-thebadge&message=Power+BI&color=222222&logo=Power+BI&logoColor=F2C811&label=',
    'Microsoft Excel': 'https://img.shields.io/static/v1?style=for-the-badge&message=Microsoft+Excel&color=217346&logo=Microsoft+Excel&logoColor=FFFFFF&',
    'Canva': 'https://img.shields.io/static/v1?style=for-the-badge&message=Canva&color=222222&logo=Canva&logoColor=00C4CC&label=',
    'Microsoft PowerPoint': 'https://img.shields.io/static/v1?style=for-the-badge&message=Microsoft+PowerPoint&color=B7472A&logo=Microsoft+PowerPoint&logoCol',
    'Microsoft SQL Server':'https://img.shields.io/static/v1?style=for-the-badge&message=Microsoft+SQL+Server&color=CC2927&logo=Microsoft+SQL+Server&logoCol',
    'MySQL': 'https://img.shields.io/static/v1?style=for-the-badge&message=MySQL&color=4479A1&logo=MySQL&logoColor=FFFFFF&label=',
    'PostgreSQL': 'https://img.shields.io/static/v1?style=for-the-badge&message=PostgreSQL&color=4169E1&logo=PostgreSQL&logoColor=FFFFFF&label=',
    'SQLite': 'https://img.shields.io/static/v1?style=for-the-badge&message=SQLite&color=003B57&logo=SQLite&logoColor=FFFFFF&label=',
    'Python': 'https://img.shields.io/static/v1?style=for-the-badge&message=Python&color=3776AB&logo=Python&logoColor=FFFFFF&label=',
    'JavaScript': 'https://img.shields.io/static/v1?style=for-the-badge&message=JavaScript&color=222222&logo=JavaScript&logoColor=F7DF1E&label=',
    'Power BI': 'https://img.shields.io/static/v1?style=for-the-badge&message=Power+BI&color=222222&logo=Power+BI&logoColor=F2C811&label=',
    'Tableau': 'https://img.shields.io/static/v1?style=for-the-badge&message=Tableau&color=E97627&logo=Tableau&logoColor=FFFFFF&label=',
    'Jupyter': 'https://img.shields.io/static/v1?style=for-the-badge&message=Jupyter&color=F37626&logo=Jupyter&logoColor=FFFFFF&label=',
    'pandas': 'https://img.shields.io/static/v1?style=for-the-badge&message=pandas&color=150458&logo=pandas&logoColor=FFFFFF&label=',
    'SPSS': 'https://img.shields.io/static/v1?style=for-the-badge&message=SPSS&color=052FAD&logo=IBM&logoColor=FFFFFF&label=',
    'R': 'https://img.shields.io/static/v1?style=for-the-badge&message=R&color=276DC3&logo=R&logoColor=FFFFFF&label=',
    'Django': 'https://img.shields.io/static/v1?style=for-the-badge&message=Django&color=092E20&logo=Django&logoColor=FFFFFF&label=',
    'FastAPI': 'https://img.shields.io/static/v1?style=for-the-badge&message=FastAPI&color=009688&logo=FastAPI&logoColor=FFFFFF&label=',
    'Flask': 'https://img.shields.io/static/v1?style=for-the-badge&message=Flask&color=000000&logo=Flask&logoColor=FFFFFF&label='
  };

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'Projects',
    },
    {
        name: 'Playground',
    }
];

