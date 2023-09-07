import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ConfirmationDialogComponent } from './shared/components/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  exibirMensagem(msg: string) {
    this.snackBar.open(msg, 'X', {duration: 5000, verticalPosition: 'top', horizontalPosition: 'center'});
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {data: errorMsg,});
  }

  onConfirm(msg: string): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: msg,
    });

    return dialogRef.afterClosed();
  }
}
