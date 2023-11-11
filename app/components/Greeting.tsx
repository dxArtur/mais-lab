'use client'
import { Grid, Separator, Em, HoverCard, HoverCardRoot, HoverCardTrigger, Link, HoverCardContent } from '@radix-ui/themes'
import Image from 'next/image'
import { Theme, ThemePanel, Text, Strong, Avatar} from '@radix-ui/themes'
import { Certificate } from 'crypto'

const Greeting = () =>{
    
    const followLinks = [
        {name: 'Github', src:'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg' , link:'https://github.com/dxArtur'},
        {name: 'LinkedIn', src:'https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg' , link:'https://www.linkedin.com/in/daniel-artur-28a410219/'}
    ]

    const Certificate = [
        {name: 'IFPB', src:'', certification:[
            {certificate:'Técnico em informática', level:'Técnico'},
            {certificate:'Análise e desenvolvimento de sistemas', level:'Superior'}
        ]},
        {name: 'Avanti', src:'', certification:[
            {certificate:'Quality Assurance', level:'Bootcamp'}
        ]},
    ]
    
    return (
        <div className=''>
            <div className='space-y-4 mb-4'>
                <Text className='text-zinc-800' mb={'4'} size={'6'}>Hello, my name is</Text>
                <div className='flex justify-left' >
                <Image className=' border-4  border-zinc-400 rounded-lg p-4'
                    
                    src="/meInSpace.png"
                    alt="me"
                    width={'300'}
                    height={'300'}
                    
                />
                </div>
            </div>
            <Text mb={'2'} size={'6'} color='jade' ><Strong>Daniel Artur</Strong></Text>
            <Separator  my={'2'} size={'4'} />
            <p>
            <Text mb={'2'} size={'4'} color='jade'>Degree in Analysis and Systems Development</Text>
            </p>
            <p>
            <Text mb={'2'} size={'4'} color='jade'>enthusiast in software engeneer, quality and clean code.</Text>
            </p>
            <Separator  my={'2'} size={'4'} />
            <p>
            <Text  className='italic' mb={'2'} size={'3'} color='gray'>Institutions i have been associated with and certifications.</Text>
            </p>
            {Certificate.map((institution)=>
                <div>
                    <Text  size={'2'} color='gray'>
                        <HoverCardRoot>
                            <HoverCardTrigger>
                                <Link underline='hover'>@{institution.name}</Link>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <Text>
                                    {institution.certification.map((certificate, index)=>
                                        <div>
                                            <Text>
                                                {certificate.certificate} - <i>{certificate.level}</i>
                                            </Text>
                                        </div>
                                    )}
                                </Text>
                            </HoverCardContent>
                        </HoverCardRoot>
                    </Text>
                </div>
            )}
            <Separator  my={'2'} size={'4'} />
            <div>
                <Text mb={'2'} className='text-zinc-700' as='p' size={'4'}>Follow us:</Text>
                
                {followLinks.map((link)=>
                    <Avatar className='mr-2'
                        size={'1'}
                        src={link.src}
                        fallback={link.name + ' logo'}
                    />
                )}


            </div>
        </div>

    )
}

export default Greeting