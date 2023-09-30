import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { motion, useAnimation } from 'framer-motion';

function Bewertung({ bewertung }) {
    const MAX_STERNE = 3;
    const [leuchtendeSterne, setLeuchtendeSterne] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            opacity: 1,
            y: -20, // Hebung der Sterne für den Bogen-Effekt
            transition: {
                duration: 0.5,
            },
        });

        const timeout = setTimeout(() => {
            if (leuchtendeSterne < bewertung) {
                setLeuchtendeSterne((prev) => prev + 1);
            }
        }, 500); // Ändere den Intervallwert nach Bedarf für die Geschwindigkeit der Sternanzeige

        return () => clearTimeout(timeout);
    }, [bewertung, leuchtendeSterne, controls]);



    return (
        <div className="flex items-center justify-center">
            {[...Array(MAX_STERNE)].map((_, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 0 }} // Anfangsposition
                    animate={controls}
                    style={{

                        transform: 'translateY(4rem) ',  // Abstand der Sterne zum Text
                        marginLeft: index > 0 ? '2rem' : 0, // Abstand der Sterne untereinander

                    }}
                >
                    <AiFillStar
                        size={50} // Größe der Sterne anpassen
                        color={index < leuchtendeSterne ? '#FFD700' : 'gray'} // Gelbe Farbe für leuchtende Sterne
                        style={{
                            transform: index===1 ? 'translateY(-2rem)' : 'translateY(0rem)' // Verschiebung des mittleren Sterns
                        }   }
                    />
                </motion.div>
            ))}
        </div>
    );
}

export default Bewertung;
