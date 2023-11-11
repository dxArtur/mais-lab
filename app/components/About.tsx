'use client'
import { Strong, Text, Separator, TabsRoot, TabsTrigger, TabsList, TabsContent, Box, Card, Flex, Avatar, Button} from '@radix-ui/themes'
import{ Portal } from  '@radix-ui/react-portal'
import React, {useState} from 'react'

const AboutMe = () =>{

    const START_DATE = new Date('01/05/2023')
    

    function calculateTimeExperience(data: Date) {
        const currentDate = new Date()

        let years = currentDate.getFullYear() - START_DATE.getFullYear()
        let months = currentDate.getMonth() - START_DATE.getMonth()
        
        let timeExperience = ''

        if (years <= 0) {
            if(months > 1){
                timeExperience += `${months} meses`
            } else{
                timeExperience += `${months} mês`
            }
        }


        if ( years > 0) {
             timeExperience += `${years} ${years === 1 ? 'ano' : 'anos'}`
            if (months > 0) {
                timeExperience += ` e ${months} ${months === 1 ? 'mês' : 'meses'}`
            }
        }

        

        return timeExperience

    }

    const typeTecnologies =[
        {name: 'Front-end'},
        {name: 'Back-end'},
        {name: 'Languages'},
        {name: 'Data'},
        {name: 'Quality Assurance'}
    ]

    const tecnologies = [
        {type: 'Front-end', name: 'Next.js', src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"},
        {type: 'Front-end', name: 'React', src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"},
        {type: 'Front-end', name: 'Tailwind CSS', src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"},
        {type: 'Front-end', name: 'Radix Ui', src: "https://raw.githubusercontent.com/radix-ui/website/main/public/favicon-black.svg"},
        {type: 'Back-end', name: 'Node.js', src: "https://github.com/devicons/devicon/raw/master/icons/nodejs/nodejs-plain.svg"},
        {type: 'Back-end', name: 'Express', src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"},
        {type: 'Languages', name: 'Typescript', src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"},
        {type: 'Languages', name: 'Javascript', src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"},
        {type: 'Data', name: 'PostgreSQL', src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"},
        {type: 'Data', name: 'MongoDB', src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"},
        {type: 'Data', name: 'Prisma', src: "https://avatars.githubusercontent.com/u/17219288?s=200&v=4"},
        {type: 'Quality Assurance', name: 'Jest' , src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg"}
    ]

    const [isContentVisible, setIsContentVisible] = useState(false)
    
    const toggleContentVisible = () =>{
        setIsContentVisible(!isContentVisible)
    }
    


    return(
        <div className='text-zinc-600  border border-zinc-400 rounded-lg p-4'>
            <p className='mb-4' >
                <Text size='4' className='text-zinc-700'>
                    <Strong>
                        Sobre mim:
                    </Strong>
                </Text>
            </p>
            <p>
                <Text size='4' >
                    Idealizador e desenvolvedor do projeto Mais Lab
                </Text>
            </p>
            <Separator  my={'4'} size={'4'} />
            <p className='mb-4'>
            <Text  className='text-align-justify' size='4' align={'center'} trim={'start'}>
                Sou um desenvolvedor full-stack, com aproximadamente {calculateTimeExperience(START_DATE)} de experiência, sou responsável por desenvolver os projetos da Mais, desenvolvendo por completo os projetos de aplicações web e as questões administrativas, transformando e realizando ideias que trazem valor e cria soluções.
            </Text>
            </p>
            <p className='mb-4'>
            <Text size='4' color='jade'>
                <Strong>
                    "E posso desenvolver qualquer coisa..."
                </Strong>
            </Text>
            </p>
            <Separator  my={'4'} size={'4'} />
            <p className='mb-4' >
            
            </p>
            <Button className='mb-4' size={'4'} variant='ghost' onClick={toggleContentVisible}>
                Veja as tecnologias que eu utilizo 
            </Button>
            {isContentVisible && (
            <TabsRoot >
                <TabsList >
                    {typeTecnologies.map(type=>
                        <TabsTrigger value={type.name} color='jade'>{type.name}</TabsTrigger>
                    )}
                </TabsList>
                
                <Box>
                {typeTecnologies.map((type)=>
                <TabsContent value={type.name}>
                    {tecnologies.filter((tecnology)=>tecnology.type === type.name).map((tecnologiesForType)=>
                        
                                <Card className='mb-4'>
                                <Flex gap='3' align='center'>
                                    <Avatar
                                    size={'3'} 
                                    src={tecnologiesForType.src}
                                    fallback={tecnologiesForType.name + ' logo'}
                                    />
                                    <Box>
                                    <Text size="2" weight="bold">
                                        {tecnologiesForType.name}
                                    </Text>
                                    </Box>
                                </Flex>
                                </Card>
                    )}
                    
                    </TabsContent>
                )}
                </Box>
                
            </TabsRoot>
            )}    
        </div>
    )
}

export default AboutMe