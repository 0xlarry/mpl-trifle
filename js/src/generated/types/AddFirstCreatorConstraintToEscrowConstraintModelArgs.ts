/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
export type AddFirstCreatorConstraintToEscrowConstraintModelArgs = {
  constraintName: string;
  tokenLimit: beet.bignum;
  transferEffects: number;
};

/**
 * @category userTypes
 * @category generated
 */
export const addFirstCreatorConstraintToEscrowConstraintModelArgsBeet =
  new beet.FixableBeetArgsStruct<AddFirstCreatorConstraintToEscrowConstraintModelArgs>(
    [
      ['constraintName', beet.utf8String],
      ['tokenLimit', beet.u64],
      ['transferEffects', beet.u16],
    ],
    'AddFirstCreatorConstraintToEscrowConstraintModelArgs',
  );
