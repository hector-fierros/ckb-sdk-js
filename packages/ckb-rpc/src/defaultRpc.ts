import paramsFmts from './paramsFormatter'
import resultFmts from './resultFormatter'

const defaultRpc: CkbComponents.IMethod[] = [
  {
    name: 'getBlock',
    method: 'get_block',
    paramsFormatters: [paramsFmts.toHash],
    resultFormatters: [resultFmts.toBlockWithHash],
  },
  {
    name: 'getTransaction',
    method: 'get_transaction',
    paramsFormatters: [paramsFmts.toHash],
    resultFormatters: [resultFmts.toTransactionWithHash],
  },
  {
    name: 'getBlockHash',
    method: 'get_block_hash',
    paramsFormatters: [paramsFmts.toNumber],
    resultFormatters: [resultFmts.toHash],
  },
  {
    name: 'getTipHeader',
    method: 'get_tip_header',
    paramsFormatters: [],
    resultFormatters: [resultFmts.toHeader],
  },
  {
    name: 'getCellsByTypeHash',
    method: 'get_cells_by_type_hash',
    paramsFormatters: [paramsFmts.toHash],
    resultFormatters: [resultFmts.toCellOutputWithOutput],
  },
  {
    name: 'getCurrentCell',
    method: 'get_current_cell',
    paramsFormatters: [paramsFmts.toOutPoint],
    resultFormatters: [resultFmts.toCellWithStatus],
  },
  {
    name: 'getTipBlockNumber',
    method: 'get_tip_block_number',
    paramsFormatters: [],
    resultFormatters: [resultFmts.toNumber],
  },
  {
    name: 'sendTransaction',
    method: 'send_transaction',
    paramsFormatters: [paramsFmts.toTx],
    resultFormatters: [resultFmts.toTxRes],
  },
]
export class DefaultPrc {
  protected defaultMethods = defaultRpc

  /* eslint-disable */
  public getBlock!: (hash: CkbComponents.Hash) => Promise<CkbComponents.IBlock>
  public getTransaction!: (hash: CkbComponents.Hash) => Promise<CkbComponents.ITransaction>
  public getBlockHash!: (number: CkbComponents.BlockNumber) => Promise<CkbComponents.Hash>
  public getTipHeader!: () => Promise<CkbComponents.IHeader>
  public getCellsByTypeHash!: (hash: string) => Promise<CkbComponents.ICell>
  public getCurrentCell!: (outPoint: CkbComponents.IOutPoint) => Promise<CkbComponents.ICell>
  public getTipBlockNumber!: () => Promise<CkbComponents.BlockNumber>
  /* eslint-enable */
}

export default DefaultPrc
