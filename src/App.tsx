import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import { Canvas } from '@react-three/fiber';
import Sword from './models/Sword';
import { OrbitControls, Stage, Environment } from '@react-three/drei';
import Shield from './models/Shield';
import Bow from './models/Bow_and_arrow';
import { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { EffectComposer, Noise, Vignette } from '@react-three/postprocessing';
import Fireplace from './models/Fireplace';
import Bull from './models/Bull';
import Terrain from './models/Terrain';

const models = [Sword, Shield, Bow, Fireplace, Bull, Terrain];

function App() {
  const [activeIndex, setActiveIndex] = useState(2);
  return (
    <>
      <Flex h='100vh'>
        <Box
          h={'full'}
          // borderColor={'red'}
          borderRight={'1px solid #30363d'}
          w='72'
          p={5}
        >
          <Box pb={5}>
            <Heading size='md'>Karpagam Academy of Higher Education</Heading>
          </Box>
          <Box
            as={motion.div}
            whileHover={{
              scale: 1.01,
              background: '#30363d',
            }}
            my={2}
            initial={{ background: 'transparent' }}
            w='full'
            p={3}
            border={'1px solid #30363d'}
            rounded='lg'
            cursor='pointer'
            onClick={() => setActiveIndex(0)}
          >
            Sword
          </Box>
          <Box
            as={motion.div}
            my={2}
            whileHover={{
              scale: 1.01,
              background: '#30363d',
            }}
            initial={{ background: 'transparent' }}
            w='full'
            p={3}
            border={'1px solid #30363d'}
            rounded='lg'
            cursor='pointer'
            onClick={() => setActiveIndex(1)}
          >
            Shield
          </Box>
          <Box
            my={2}
            as={motion.div}
            whileHover={{
              scale: 1.01,
              background: '#30363d',
            }}
            initial={{ background: 'transparent' }}
            w='full'
            p={3}
            border={'1px solid #30363d'}
            rounded='lg'
            cursor='pointer'
            onClick={() => setActiveIndex(2)}
          >
            Bow and Arrow
          </Box>
          <Box
            my={2}
            as={motion.div}
            whileHover={{
              scale: 1.01,
              background: '#30363d',
            }}
            initial={{ background: 'transparent' }}
            w='full'
            p={3}
            border={'1px solid #30363d'}
            rounded='lg'
            cursor='pointer'
            onClick={() => setActiveIndex(3)}
          >
            Fireplace
          </Box>
          <Box
            my={2}
            as={motion.div}
            whileHover={{
              scale: 1.01,
              background: '#30363d',
            }}
            initial={{ background: 'transparent' }}
            w='full'
            p={3}
            border={'1px solid #30363d'}
            rounded='lg'
            cursor='pointer'
            onClick={() => setActiveIndex(4)}
          >
            Bull
          </Box>
          <Box
            my={2}
            as={motion.div}
            whileHover={{
              scale: 1.01,
              background: '#30363d',
            }}
            initial={{ background: 'transparent' }}
            w='full'
            p={3}
            border={'1px solid #30363d'}
            rounded='lg'
            cursor='pointer'
            onClick={() => setActiveIndex(5)}
          >
            Terrain
          </Box>
        </Box>
        <Box h='full' w='calc(100vw - 288px)'>
          <Container h='full' maxW='container.xl'>
            <Canvas>
              <Environment preset='warehouse' />
              <OrbitControls />
              <ambientLight />
              <Stage>
                <Suspense fallback={null}>
                  {
                    // @ts-ignore
                    models[activeIndex]()
                  }
                </Suspense>
              </Stage>

              <EffectComposer>
                <Noise opacity={0.02} />
                <Vignette eskil={false} offset={0.1} darkness={1.1} />
              </EffectComposer>
            </Canvas>
          </Container>
        </Box>
      </Flex>
    </>
  );
}

export default App;
