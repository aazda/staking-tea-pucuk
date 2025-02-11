import { defineChain } from 'thirdweb';
import { client } from './client';
import { getContract } from 'thirdweb';

export const contract = getContract({
    client,
    chain: defineChain(93384),
    address: '0x5917746c0c59C3c8D1662C5EC362aCC905503b22'

});