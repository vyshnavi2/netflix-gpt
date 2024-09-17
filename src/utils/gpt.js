import OPENAI from 'openai'
import {OPEN_AI_KEY} from '../utils/constants'

const gpt= new OPENAI({apiKey:OPEN_AI_KEY, dangerouslyAllowBrowser: true}) ;


export default gpt;