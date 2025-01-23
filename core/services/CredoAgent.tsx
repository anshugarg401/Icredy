import {
    Agent,
    InitConfig,
    ConnectionEventTypes,
    ConnectionStateChangedEvent,
    WsOutboundTransport,
    HttpOutboundTransport,
    DidExchangeState,
    OutOfBandRecord,
    ConnectionsModule,
  } from '@credo-ts/core'
  import { agentDependencies} from '@credo-ts/react-native'


import { AskarModule } from '@credo-ts/askar'
import { ariesAskar } from '@hyperledger/aries-askar-react-native'


const initializeBobAgent = async () => {
    // Simple agent configuration. This sets some basic fields like the wallet
    // configuration and the label. It also sets the mediator invitation url,
    // because this is most likely required in a mobile environment.
    const config: InitConfig = {
      label: 'demo-agent-bob',
      walletConfig: {
        id: 'mainBob',
        key: 'demoagentbob00000000000000000000',
      },
      endpoints: ['http://localhost:3001'],
    }
  
    // A new instance of an agent is created here
    const agent = new Agent({
      config,
      modules: {
        askar: new AskarModule({ ariesAskar }),
        connections: new ConnectionsModule({ autoAcceptConnections: true }),
      },
      dependencies: agentDependencies,
    })
  
    // Register a simple `WebSocket` outbound transport
    agent.registerOutboundTransport(new WsOutboundTransport())
  
    // Register a simple `Http` outbound transport
    agent.registerOutboundTransport(new HttpOutboundTransport())
  
    // Initialize the agent
    await agent.initialize()
  
    return agent
  }

  const initializeAcmeAgent = async () => {
    // Simple agent configuration. This sets some basic fields like the wallet
    // configuration and the label.
    const config: InitConfig = {
      label: 'demo-agent-acme',
      walletConfig: {
        id: 'mainAcme',
        key: 'demoagentacme0000000000000000000',
      },
    //   endpoints: ['http://localhost:3001'],
    }
  
    // A new instance of an agent is created here
    const agent = new Agent({
      config,
      modules: {
        askar: new AskarModule({ ariesAskar }),
        connections: new ConnectionsModule({ autoAcceptConnections: true }),
      },
      dependencies: agentDependencies,
    })
  
    // Register a simple `WebSocket` outbound transport
    agent.registerOutboundTransport(new WsOutboundTransport())
  
    // Register a simple `Http` outbound transport
    agent.registerOutboundTransport(new HttpOutboundTransport())
  
    // // Register a simple `Http` inbound transport
    // agent.registerInboundTransport(new HttpInboundTransport({ port: 3001 }))
  
    // Initialize the agent
    await agent.initialize()
  
    return agent
  }
  
const run = async () => {
    console.log('Initializing Bob agent...')
    const bobAgent = await initializeBobAgent()
    console.log('Initializing Acme agent...',bobAgent)
    const acmeAgent = await initializeAcmeAgent()
    console.log('Initializing Acme agent...',acmeAgent)
    // console.log('Creating the invitation as Acme...')
    // const { outOfBandRecord, invitationUrl } = await createNewInvitation(acmeAgent)
  
    // console.log('Listening for connection changes...')
    // setupConnectionListener(acmeAgent, outOfBandRecord, () =>
    //   console.log('We now have an active connection to use in the following tutorials')
    // )
  
    // console.log('Accepting the invitation as Bob...')
    // await receiveInvitation(bobAgent, invitationUrl)
  }
  
  export default run