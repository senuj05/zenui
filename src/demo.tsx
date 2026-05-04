import React from "react";
import { createRoot } from 'react-dom/client';
import {Button} from './components/Button/Button';

createRoot(document.getElementById('root')!).render(
    <div style={{ padding: '40px', display: 'flex', gap: '12px'}}>
        <Button variant='default' size='medium'>DEFAULT </Button>
        <Button variant='secondary' size='medium'>SECONDARY </Button>
        <Button variant='outline' size='medium'>OUTLINE </Button>
        <Button variant='ghost' size='medium'>GHOST </Button>
        <Button variant='destructive' size ='medium'>DESTRUCTIVE </Button>
        <Button variant='destructive-ghost' size= 'medium'>DESTRUCTIVE GHOST </Button>
        <Button variant='inverse' size="medium">INVERSE </Button>
        <Button variant='outline-inverse' size ='medium'>OUTLINE- INVERSE </Button>
        <Button variant='ghost-inverse' size = 'medium'>GHOST INVERSE </Button>
    </div>
)