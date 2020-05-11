import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // TODO
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transction = await transactionsRepository.findOne(id);

    if (!transction) {
      throw new AppError('Transaction does not exist');
    }

    await transactionsRepository.remove(transction);
  }
}

export default DeleteTransactionService;
