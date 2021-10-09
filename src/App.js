import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  MenuIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/react/solid'

const navigation = [
	{ name: 'About', href: '#about'},
	{ name: 'Skills', href: '#skills'},
  { name: 'Past Works', href: '#work'},
  { name: 'Projects', href: '#projects'},
  { name: 'Resume', href: '/resume.pdf' },
  { name: 'Github', href: 'https://github.com/mreverson?tab=repositories' },
]

// Todo: Skills
const features = [
  {
    name: 'HTML/JS/CSS',
    icon: CloudUploadIcon,
  },
  {
    name: 'React',
    icon: LockClosedIcon,
  },
  {
    name: 'NextJS',
    icon: RefreshIcon,
  },
  {
    name: 'KeystoneJS',
    icon: ShieldCheckIcon,
  },
  {
    name: 'RestAPI',
    icon: CogIcon,
  },
  {
    name: 'MongoDB/Firebase/PostgreSQL',
    icon: ServerIcon,
  },
]

// TODO: Github Portfolio - use vercel to host reps and link here
const blogPosts = [
  {
    id: 1,
    title: 'AirBnb Clone',
    href: 'https://airbnb-clone-14wdxvkst-mreverson.vercel.app/',
    imageUrl:
      '/images/previews/airbnb-clone-preview.png',
    preview:
      'NextJS, Tailwind CSS, DatePickers, Map Box',
  },
  {
    id: 2,
    title: 'Covid Tracker',
    href: 'https://covid-tracker-teal.vercel.app/',
    imageUrl:
      '/images/previews/covid-tracker-preview.png',
    preview:
      'React, Map Integration, Rest API',
    
  },
  {
    id: 3,
    title: 'Disney Plus Clone',
    href: 'https://disney-plus-clone-rf9ofzaoh-mreverson.vercel.app/',
    imageUrl:
      '/images/previews/disney-plus-preview.png',
    preview:
      'React, Redux, Styled Components, Firebase - NOTE: There are ongoing issues with this deploy due to Firebase',
  },
  {
    id: 4,
    title: 'Robinhood Clone',
    href: 'https://robinhood-clone-inky.vercel.app/',
    imageUrl:
      '/images/previews/robinhood-clone-preview.png',
    preview:
      'React, Firebase, ChartJS, MaterialUI - NOTE: There are ongoing issues with this deploy due to Firebase',
  },
  {
    id: 5,
    title: 'Slack Clone',
    href: 'https://slack-clone-khaki.vercel.app/',
    imageUrl:
      '/images/previews/slack-clone-preview.png',
    preview:
      'React, React Router, Firebase, MaterialUI',
  },
  {
    id: 6,
    title: 'Tesla Clone',
    href: 'https://slack-clone-khaki.vercel.app/',
    imageUrl:
      '/images/previews/tesla-clone-preview.png',
    preview:
      'React, Redux, Styled Components, MaterialUI',
  },
]


function App() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <Popover as="header" className="relative">
          <div className="bg-gray-900 pt-6">
            <nav
              className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-teal-200-cyan-400.svg"
                      alt=""
                    />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden space-x-8 md:flex md:ml-10">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-white hover:text-gray-300"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-6">
                <a
                  href="https://perfeci.com/#contact"
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="pt-5 pb-6">
                  <div className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-6 px-5">
                    <a
                      href="https://perfeci.com/#contact"
                      target="_blank"
                      className="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700"
                    >
                      Contact
                    </a>
                  </div>
                  
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <main>
          <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-40 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block">Marcus</span>
                      <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                        Everson
                      </span>
                    </h1>
                    <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
						I am an experienced full stack developer for web and mobile applications with a love for a clean &amp; functional front end.
                    </p>
                    
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                    <img
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="about" className="relative bg-gray-50 py-16 sm:pt-24 lg:pt-32">
            <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
              <div>
                <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">About</h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  More About Me...
                </p>
                <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                  I grew up in Phoenix, AZ and graduated from Arizona State University with a degree in Computer Informatics (Human-Computer Interaction). In 2015, I began freelancing for various small-to-medium sized companies developing websites and intenal tools. 
                </p>
				        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
					        When I'm not working, I enjoy playing games with friends, collaborating on digital arts projects and visiting coffee shops with my dog. 
                </p>
              </div>
              
            </div>
          </div>

          {/* Feature section with grid */}
          <div id="skills" className="relative bg-gray-100 py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Skills</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Top Expertise
              </p>
              <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
			  Fullstack Developer with a primary focus on Frontend Technologies
              </p>
              <div className="mt-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature) => (
                    <div key={feature.name} className="pt-6">
                      <div className="flow-root rounded-lg px-6 pb-8">
                        <div className="-mt-6 transition duration-500 ease-in-out hover:bg-transparent transform hover:-translate-y-1 hover:scale-110">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                              <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                          <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial section */}
          <div id="work" className="pb-16 bg-teal-500 lg:pb-0 lg:z-10 lg:relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 ">
			
              <div className="mt-12 lg:m-0 lg:col-span-12 lg:pl-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
				          <h2 className="text-base font-semibold tracking-wider text-white uppercase text-center">Past Works</h2>
                  <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl text-center">
                      Companies I've done work for
                  </p>
                  <div className="grid grid-cols-4 gap-6 px-4">
                    <div className="flex text-right overflow-hidden justify-center items-center px-10 py-10">
                      <img src="/images/logos/a-logo.png" alt="" className="max-w-full h-full object-contain" />
                    </div>
                    <div className="flex text-right overflow-hidden justify-center items-center px-10 py-10">
                      <img src="/images/logos/a2-logo.png" alt="" className="max-w-full h-full object-contain" />
                    </div>
                    <div className="flex text-right overflow-hidden justify-center items-center px-10 py-10">
                      <img src="/images/logos/altapp-logo.png" alt="" className="max-w-full h-full object-contain" />
                    </div>
                    <div className="flex text-right overflow-hidden justify-center items-center px-10 py-10">
                      <img src="/images/logos/c-logo.png" alt="" className="max-w-full h-full object-contain" />
                    </div>
                    <div className="flex text-right overflow-hidden justify-center items-center px-10 py-10">
                      <img src="/images/logos/hfss-logo.png" alt="" className="max-w-full h-full object-contain" />
                    </div>
                    <div className="flex text-right overflow-hidden justify-center items-center px-10 py-10">
                      <img src="/images/logos/chfss-logo.png" alt="" className="max-w-full h-full object-contain" />
                    </div>
                    <div className="flex text-right overflow-hidden justify-center items-center px-10 py-10">
                      <img src="/images/logos/logo.png" alt="" className="max-w-full h-full object-contain" />
                    </div>
                    <div className="flex text-right overflow-hidden justify-center items-center px-10 py-10">
                      <img src="/images/logos/m-logo.png" alt="" className="max-w-full h-full object-contain" />
                    </div>
                    <div className="flex text-right overflow-hidden justify-center items-center px-10 py-10">
                      <img src="/images/logos/n-logo.png" alt="" className="max-w-full h-full object-contain" />
                    </div>
                    <div className="flex text-right overflow-hidden justify-center items-center px-10 py-10">
                      <img src="/images/logos/tlg-logo.png" alt="" className="max-w-full h-full object-contain" />
                    </div>
                    <div className="flex text-right overflow-hidden justify-center items-center px-10 py-10">
                      <img src="/images/logos/jpa-logo.png" alt="" className="max-w-full h-full object-contain" />
                    </div>
                    <div className="flex text-right overflow-hidden justify-center items-center px-10 py-10">
                      <img src="/images/logos/collectivelogo.png" alt="" className="max-w-full h-full object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog section */}
          <div id="projects" className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
            <div className="relative">
              <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Projects</h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  Clones and Projects
                </p>
                <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
                  The Following are personal projects publicly available on my <a className="text-cyan-600 hover:underline" href="https://github.com/mreverson?tab=repositories" target="_blank">github</a>.
                  <br/> <span className="text-gray-800 text-sm">Please note: they may be in-progress or not fully functional due to the scope of the project itself. Some projects are purely to test certain functionality while other focus on design</span>.
                </p>
              </div>
              <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                {blogPosts.map((post) => (
                  <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <a href={post.href} className="block mt-2">
                    <div className="flex-shrink-0">
                      <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                        <p className="mt-3 text-base text-gray-500">{post.preview}</p>
                      </div>
                    </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative bg-gray-900">
            <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
                alt=""
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
              />
            </div>
            <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
              <div className="md:ml-auto md:w-1/2 md:pl-10">
                <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                  Thats it!
                </h2>
                <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">If you would like to reach me...</p>
                <p className="mt-3 text-lg text-gray-300">
                  I am currently contracting under <a className="text-xl text-teal-500 hover:underline hover:pointer" href="https://perfeci.com/">Perfeci</a> and <a className="text-xl text-teal-500 hover:underline hover:pointer" href="https://www.thecollective.io/">The Collective</a>. If you are interested in my services, Please contant me via the buttons below.
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      target="_blank"
                      href="https://perfeci.com/#contact"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-300"
                    >
                      Perfeci Contact
                      <ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </a>
                    </div>
                    <div className="inline-flex rounded-md shadow mx-3">
                    <a
                      target="_blank"
                      href="https://www.thecollective.io/contact"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-300"
                    >
                      The Collective
                      <ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-gray-50" aria-labelledby="footer-heading">
          <div className="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8">
            
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
