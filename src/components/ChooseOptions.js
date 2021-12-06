// Styled components
import { Tab } from './styles/Tab.styled'
import { StyledCard } from './styles/Card.styled'
import { Flex } from './styles/Flex.styled'
import { TitleBar } from './styles/TitleBar.styled'
import { OptionBar } from './styles/OptionBar.styled'
import { Select } from './styles/Select.styled'
import { Add, Expander, Product } from './styles/ChooseOptions.styled'

// React-icons
import { AiOutlineDown } from 'react-icons/ai'

const tabs = [
    'RVs',
    'Caravans',
    'Add New'
]

const wheels = [
    {
        label: 'Size',
        options: [
            '16"',
            '13"',
        ]
    },
    {
        label: 'Brand',
        options: [
            'MPC"',
            'NPC"',
        ]
    },
    {
        label: 'Maximum',
        options: [
            '2"',
            '3"',
        ]
    },
]


const toolboxes = [
    {
        name: 'Chrome'
    },
    {
        name: 'Black'
    }
]

const externalLights = [
    {
        label: 'Normal'
    },
    {
        label: 'Work'
    }
]

export default function ChooseOptions() {
    return (
        <>
            <Flex>
                {
                    tabs.map((elm, i) => (
                        <Tab key={i}>{elm}</Tab>
                    ))
                }
            </Flex>
            <StyledCard>
                {/* // ! Title Bar */}
                <OptionBar style={{ gridGap: 0 }}>
                    <TitleBar borderRadius='10px 0 0 10px'>Name</TitleBar>
                    <TitleBar>Selection</TitleBar>
                    <TitleBar borderRadius='0 10px 10px 0'>Hide</TitleBar>
                </OptionBar>

                {/* // ! Type Of RV */}
                <OptionBar>
                    <div style={{ fontWeight: 700 }}>
                        Type Of RV:
                    </div>
                    <Select name="" id="">
                        <option value="">
                            Carvan
                        </option>
                    </Select>
                    <div></div>
                </OptionBar>

                {/* // ! Wheels */}
                <OptionBar >
                    <div style={{ fontWeight: 700 }}>
                        Wheels:
                    </div>
                    <div>
                        <Flex style={{ gap: '20px' }}>
                            {
                                wheels.map((elm, i) => (
                                    <div key={i}>
                                        <h5 style={{ margin: 0 }}>{elm.label}:</h5>
                                        <Select name="" id="">
                                            {
                                                elm.options.map((opt, i) => (
                                                    <option key={i} value={opt}>
                                                        {opt}
                                                    </option>
                                                ))
                                            }
                                        </Select>
                                    </div>
                                ))
                            }
                        </Flex>
                        <Flex style={{ gap: '10px', marginTop: '30px' }}>
                            {
                                new Array(3).fill('').map((elm, i) => (
                                    <Product key={i}>
                                        <h5>Name</h5>
                                        <div className='image' >
                                            <input type="checkbox" value='Add To Selection' /> Add To Selection
                                            {/* <img src='images/wheels/wheel1.svg' /> */}
                                        </div>
                                        <div className='default'>
                                            <div>
                                                <input type="checkbox" /> Default
                                            </div>
                                            $ 0
                                        </div>
                                    </Product>
                                ))
                            }
                            <Add>+</Add>
                        </Flex>
                    </div>
                    <div>
                        <input type="checkbox" />
                    </div>
                </OptionBar>

                {/* // ! Toolbox */}
                <OptionBar style={{}}>
                    <div style={{ fontWeight: 700 }}>
                        Toolbox:
                    </div>
                    <Flex style={{ gap: '10px' }}>
                        {
                            toolboxes.map((elm, i) => (
                                <Product key={i}>
                                    <h5 >{elm.name}</h5>
                                    <div className='image'>
                                        <input type="checkbox" value='Add To Selection' /> Add To Selection
                                    </div>
                                    <div className='default'>
                                        <div>
                                            <input type="checkbox" /> Default
                                        </div>
                                        $ 0
                                    </div>
                                </Product>
                            ))
                        }
                        <Add>+</Add>
                    </Flex>
                    <div>
                        <input type="checkbox" />
                    </div>
                </OptionBar>

                {/* // ! External Lights */}
                <OptionBar style={{}}>
                    <div style={{ fontWeight: 700 }}>
                        External Lights:
                    </div>
                    <Flex dir='column'>
                        <Expander borderRadius='10px'>
                            Front
                            <AiOutlineDown />
                        </Expander>
                        <Flex style={{ gap: '10px' }}>
                            {
                                externalLights.map((elm, i) => (
                                    <Product key={i}>
                                        <h5 >{elm.label}</h5>
                                        <div className='image'>
                                            <input type="checkbox" value='Add To Selection' /> Add To Selection
                                        </div>
                                        <div className='default'>
                                            <div>
                                                <input type="checkbox" /> Default
                                            </div>
                                            $ 0
                                        </div>
                                    </Product>
                                ))
                            }
                            <Add>+</Add>
                        </Flex>
                    </Flex>
                    <div>
                        <input type="checkbox" />
                    </div>
                </OptionBar>
            </StyledCard>
        </>
    )
}
