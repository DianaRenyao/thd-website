import { Component, Inject, OnInit } from '@angular/core';
import { SessionMessage } from '../_models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MessageWithRepliedMessage } from '../_models/message-with-replied-message';
import { MessageService } from '../_services/message.service';

@Component({
  selector: 'app-create-message-dialog',
  templateUrl: './create-message-dialog.component.html',
  styleUrls: ['./create-message-dialog.component.scss']
})
export class CreateMessageDialogComponent implements OnInit {

  session: SessionMessage;
  createMessageForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public replyTo: MessageWithRepliedMessage,
    private dialogRef: MatDialogRef<CreateMessageDialogComponent>,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
  ) {
    this.createMessageForm = formBuilder.group({
      content: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get form() {
    return this.createMessageForm.controls;
  }

  ngOnInit() {
  }

  onSubmit() {
    const creationMessage = {
      content: this.form.content.value,
      replyTo: undefined,
    };
    if (this.replyTo) {
      creationMessage.replyTo = this.replyTo.messageId;
    }
    this.messageService
      .createMessage(creationMessage)
      .subscribe(
        message => {
          this.dialogRef.close(message);
        },
        errorResponse => {
          this.dialogRef.close(errorResponse);
        },
      );
  }
}
