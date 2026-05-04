import React from "react";
import { createRoot } from 'react-dom/client';
import {Button} from './components/Button/Button';

createRoot(document.getElementById('root')!).render(
    <div style={{ padding: '40px', display: 'flex', gap: '12px'}}>
        <Button variant='default' size='medium'>Primary </Button>
        <Button variant='secondary' size='medium'>Secondary </Button>
        <Button variant='outline' size='medium'>Outline </Button>
        <Button variant='ghost' size='medium'>Ghost </Button>
        <Button variant='destructive' size ='medium'> Destructive </Button>
        <Button variant='destructive-ghost' size= 'medium'>Destructive Ghost </Button>
        <Button variant='inverse' size="medium">Inverse </Button>
        <Button variant='outline-inverse' size ='medium'>Outline- Inverse </Button>
        <Button variant='ghost-inverse' size = 'medium'>Ghost- Inverse </Button>
    </div>
)