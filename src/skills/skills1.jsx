import React,{useState,useEffect,useRef} from 'react'
import php from '../images/php.png'
import html from '../images/html-5.png'
import css from '../images/css.png'
import javascript from '../images/js.png'
import linux from '../images/linux.png'
import Bugbounty from '../images/bug_bounty.png'
import Java from '../images/java.png'
import springboot from '../images/spring.png'

function Skills() {
    const [typed, setTyped] = useState('');
    const [history, setHistory] = useState([]);
    const [done, setDone] = useState(false);

    const commands = [
        { cmd: 'cd my_skills', out: null },
        { cmd: 'ls -la', out: ['drwx development','drwx programming','drwx CyberSecurity'] },
      
    ];

    const sectionRef = useRef(null);
    const typingRef = useRef(null);
    const startedRef = useRef(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const startTyping = () => {
            let line = 0;
            let ch = 0;
            typingRef.current = setInterval(() => {
                if (line >= commands.length) {
                    clearInterval(typingRef.current);
                    setDone(true);
                    return;
                }

                const cur = commands[line];
                if (ch < cur.cmd.length) {
                    setTyped((prev) => prev + cur.cmd[ch]);
                    ch++;
                } else {
                    setHistory((prev) => [...prev, `$ ${cur.cmd}`]);
                    if (cur.out) setHistory((prev) => [...prev, ...cur.out]);
                    line++;
                    ch = 0;
                    setTyped('');
                }
            }, 80);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !startedRef.current) {
                    startedRef.current = true;
                    startTyping();
                }
            });
        }, { threshold: 0.3 });

        observer.observe(el);

        return () => {
            observer.disconnect();
            if (typingRef.current) clearInterval(typingRef.current);
        };
    }, []);
    return (
        <section ref={sectionRef}> {/*className='relative overflow-hidden flex flex-row text-white body-font'*/}
    {/* <div className="container flex flex-wrap px-5 py-24 mx-auto items-center"> */}
        <div
        data-aos='fade-down'
        data-aos-delay='200'
         className="lg:w-1/2 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <div className="relative border-2 border-green-500 bg-black text-green-400 font-mono p-6 rounded-md shadow-[0_0_20px_rgba(34,197,94,0.5)]">
        {/* <p data-aos='fade-right' data-aos-delay='500' className="mb-8 leading-relaxed">Proficient in JavaScript, React, Node.js, Express, MongoDB, and Python. Experienced in building secure web applications with a focus on authentication, authorization, and data protection. Skilled in using modern development tools and practices to ensure code quality and maintainability.</p> */}
                <div className='flex-col text-green-400 font-mono text-lg space-y-1'>
                     {history.map((line, index) => (
                         <div key={index}>{line}</div>
                     ))}
                     {!done && typed.length > 0 && <div>{`$ ${typed}`}</div>}
                </div>
          </div>
        </div>
        {/* <div data-aos='fade-left' data-aos-delay='100' className="flex flex-col md:w-1/2 md:pl-12 mt-16">
        <nav className='flex flex-wrap  list-none -mb-1'>

            
            <li className='lg:w-1/3 mb-4 w-1/2'>
            <img src={php} alt="php" className='rounded-full w-24 h-24 object-cover'/></li>

            <li className='lg:w-1/3 mb-4 w-1/2'>
            <img src={html} alt="html" className='rounded-full w-24 h-24 object-cover'/></li>

            <li className='lg:w-1/3 mb-4 w-1/2'>
            <img src={css} alt="css" className='rounded-full w-24 h-24 object-cover'/></li>

            <li className='lg:w-1/3 mb-4 w-1/2'>
            <img src={javascript} alt="javascript" className='rounded-full w-24 h-24 object-cover'/></li>

            <li className='lg:w-1/3 mb-4 w-1/2'>
            <img src={linux} alt="linux" className='rounded-full w-24 h-24 object-cover'/></li>

            <li className='lg:w-1/3 mb-4 w-1/2'>
            <img src={Bugbounty} alt="bugbounty" className='rounded-full w-24 h-24 object-cover'/></li>

            <li className='lg:w-1/3 mb-4 w-1/2'>
            <img src={Java} alt="java" className='rounded-full w-24 h-24 object-cover'/></li>
        </nav>
    </div> */}
    {/* </div>




    
    
   */}
   </section>
   )
}

export default Skills
