import { FormGroup } from '@angular/forms';

export const matchValidator = (
  controleNome: string,
  comparacaoNome: string
) => {
  const valida = (formGroup: FormGroup) => {
    const controle = formGroup.controls[controleNome];
    const comparacao = formGroup.controls[comparacaoNome];

    if (controle.errors) {
      return;
    }

    if (controle.value !== comparacao.value) {
      comparacao.setErrors({ comparacao: true });
    } else {
      comparacao.setErrors(null);
    }
  };
  return valida;
};