import {
  type IconType,
  SiAstro,
  SiFlutter,
  SiFirebase,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiRubyonrails,
  SiSass,
  SiTailwindcss,
  SiSupabase,
  SiTypescript
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'html', icon: SiHtml5 },
        { skill: 'css', icon: SiCss3 },
        { skill: 'javascript', icon: SiJavascript },
        { skill: 'typescript', icon: SiTypescript },
        { skill: 'react', icon: SiReact },
        { skill: 'tailwind', icon: SiTailwindcss },
        { skill: 'nextjs', icon: SiNextdotjs },
        {
          skill: 'bootstrap',
          icon: SiBootstrap,
        },
      ],
    },
    {
      field: 'Backend',
      skills: [
        {
          skill: 'nodejs',
          icon: SiNodedotjs,
        },
        {
          skill: 'python',
          icon: SiPython,
        },
        {
          skill: 'php',
          icon: SiPhp,
        },
        {
          skill: 'laravel',
          icon: SiLaravel,
        },
        {
          skill: 'mongodb',
          icon: SiMongodb,
        },
        {
          skill:'postgresql',
          icon: SiSupabase,
        },
        {
          skill: 'mysql',
          icon: SiMysql,
        },
        {
          skill: 'nginx',
          icon: SiNginx,
        },

      ],
    },
    {
      field: 'Mobile',
      skills: [
        {
          skill: 'flutter',
          icon: SiFlutter,
        },
        {
          skill: 'firebase',
          icon: SiFirebase,
        },

      ],
    },
  ]

export default SKILLS
