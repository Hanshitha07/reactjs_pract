import React,{useState,useEffect, use} from 'react'

const Resize = () => {
    const [screenSize, setScreenSize] = useState({ 
        width: window.innerWidth,
        height: window.innerHeight
    });
    const updateScreenSize = () => {
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };
    useEffect(() => {
        window.addEventListener('resize', updateScreenSize);

        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []);
    return (
        <div>
            <h1>Screen Size</h1>
            <p style={{ color: screenSize.width > 800 ? 'green' : 'red' }}>Width: {screenSize.width}px</p>
            <p style={{ color: screenSize.height > 600 ? 'green' : 'red' }}>Height: {screenSize.height}px</p>
        </div>
    );
}

export default Resize