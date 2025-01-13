  // import { Component, OnInit } from '@angular/core';
  // import { NotificationService } from '../../services/notification.service';

  // @Component({
  //   selector: 'app-notification',
  //   template: `
  //     <div *ngIf="message" class="notification">
  //       {{ message }}
  //     </div>
  //   `,
  //   styles: [
  //     `
  //       .notification {
  //         position: fixed;
  //         top: 20px;
  //         right: 20px;
  //         background-color: #4caf50;
  //         color: white;
  //         padding: 10px;
  //         border-radius: 5px;
  //         z-index: 1000;
  //       }
  //     `,
  //   ],
  // })
  // export class NotificationComponent implements OnInit {
  //   message: string | null = null;

  //   constructor(private notificationService: NotificationService) {}

  //   ngOnInit() {
  //     this.notificationService.message$.subscribe((msg) => {
  //       this.message = msg;
  //       setTimeout(() => (this.message = null), 3000);
  //     });
  //   }
  // }
