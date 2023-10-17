'use client'
import React from "react"
import { TextField ,Button, Grid, Flex, Box } from '@radix-ui/themes'
import Image from "next/image"
import SimpleMde from "react-simplemde-editor"
import 'easymde/dist/easymde.min.css'

const ContactPage = () => {
    return (
        <Grid columns={'2'} gap='3' 
        >

        <div className="max-w-xl space-y-3">
                <TextField.Root>
                    <TextField.Input placeholder="Name"/>
                </TextField.Root>
                <TextField.Root>
                    <TextField.Input placeholder="Email"/>
                </TextField.Root>
                <TextField.Root>
                    <TextField.Input placeholder="subject"/>
                </TextField.Root>
                <SimpleMde placeholder="how do you help?"/>
                <Button >Send</Button>
        </div>
        <div className="pl-10">
            <div className="pl-10">
                <Image
                    src="/spaceman.png"
                    alt="spaceman"
                    width={380}
                    height={380}
                    priority
                />
            </div>
            <div>
                <Image
                    src="/logo.svg"
                    alt="mais lab logo"
                    width={480}
                    height={430}
                    priority
                />
            </div>
        </div>
       </Grid>
    )
}

export default ContactPage