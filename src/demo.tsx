import React from "react";
import { createRoot } from 'react-dom/client';
import {Button} from './components/Button/Button';

createRoot(document.getElementById('root')!).render(
    <div style={{ padding: '40px', display: 'flex', gap: '12px'}}>
        <Button variant='primary' size='medium'>Primary</Button>
        <Button variant='secondary' size='medium'>Secondary</Button>
        <Button variant='outline' size='medium'>Outline</Button>
    </div>
)