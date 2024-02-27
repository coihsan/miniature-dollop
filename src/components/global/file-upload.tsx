import React from 'react'
import Image from 'next/image';
import { FileIcon, X } from 'lucide-react';
import { Button } from '../ui/button';
import { UploadDropzone } from '@/lib/uploadthing';
type Props = {
    apiEndpoint: 'agencylogo' | 'avatar' | 'subaccountlogo'
    onChange: (url?: string)=> void
    value: string
}

const FileUpload = ({apiEndpoint, onChange, value}: Props) => {
    const type = value?.split('.').pop();
    if(value){
        return <div className='flex flex-col items-center justify-center'>{type !== "pdf" ? (
            <div className='relative h-40 w-40'><Image src={value} alt='file upload' className='object-container' fill></Image></div>) : (
                <div className='relative flex-items-center p-2 mt-2 rounded-md bg-background/10'>
                    <FileIcon/>
                    <a href={value} target='_blank' ref='nonopener_nonreferer' className='ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline'></a>
                </div>
            )}
            <Button onClick={()=> onChange('')} variant={'ghost'} type='button'><X className='h-4 w-4' /> Remove Logo</Button>
            </div>
    }
  return (
    <div className="w-full bg-muted/30">
      <UploadDropzone
        endpoint={apiEndpoint}
        onClientUploadComplete={(res) => {
          onChange(res?.[0].url)
        }}
        onUploadError={(error: Error) => {
          console.log(error)
        }}
      />
    </div>
  )
}

export default FileUpload