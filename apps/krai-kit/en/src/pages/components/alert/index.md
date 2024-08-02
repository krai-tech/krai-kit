# {{ NgDocPage.title }}

Alerts are used to display inline notifications. They help users quickly receive important information or warnings while interacting with the application.

```ts
import { AlertComponent } from '@krai-tech/kit/alert';
```

## Types

`AlertComponent` - supports multiple types of notifications, each with its own purpose and appearance.


### Default

Used to display regular messages without any special stylistic emphasis.
<br>
This notification has no special significance and is suitable for general informational messages.

```html
<kri-alert>alert message</kri-alert>
```

{{ NgDocActions.demo("AlertDemoComponent", { container: false, inputs: {text: "System updates will occur tonight from 11:00 PM to 1:00 AM."} }) }}


### Informational

Used to display informational messages that are relevant to the user. This type of notification provides users with useful information.

```html
<kri-alert type="info">alert message</kri-alert>
```

{{ NgDocActions.demo("AlertDemoComponent", { container: false, inputs: {type: "info", text: "Please review the updated privacy policy in your account settings."} }) }}


### Success

Used for messages about the successful completion of actions or operations. <br>
This type of notification informs users that everything went smoothly.

```html
<kri-alert type="success">alert message</kri-alert>
```

{{ NgDocActions.demo("AlertDemoComponent", { container: false, inputs: {type: "success", text: "Your changes have been successfully saved!"} }) }}

### Warning

Used to display warnings about possible issues or the need for attention. <br>
This type of notification draws users attention to important details or potential problems.

```html
<kri-alert type="warning">alert message</kri-alert>
```

{{ NgDocActions.demo("AlertDemoComponent", { container: false, inputs: {type: "warning", text: "Your session is about to expire. Please save your work to avoid losing any changes."} }) }}

### Danger

Used to display critical warnings about errors or dangerous situations. <br>
This type of notification helps users avoid serious problems or mistakes.

```html
<kri-alert type="danger">alert message</kri-alert>
```

{{ NgDocActions.demo("AlertDemoComponent", { container: false, inputs: {type: "danger", text: "<strong>Critical Error Detected.</strong> <br> An unexpected error has occurred. Please contact support immediately."} }) }}

## Change the icon

Notifications also support changing the icon for greater flexibility and informativeness. <br>
This allows the use of custom IconComponent icons for specific types of notifications, making them more expressive and understandable.

```html
<kri-alert type="danger" 
           icon="cancel" 
           [iconColor]="#DA291C">
  alert message
</kri-alert>
```

{{ NgDocActions.demo("AlertDemoComponent", { container: false, inputs: {type: "danger", icon: "cancel", iconColor: "#DA291C", text: "<strong>Critical Error Detected.</strong> <br> An unexpected error has occurred. Please contact support immediately."} }) }}

## Close alert

For notifications that require the ability to be closed by the user, a close button can be added. <br>
This is convenient for users as they can close the notification themselves after reading the information.

```html
<kri-alert 
  type="info" 
  [showCloseBtn]="true" 
  (closeAlert)="handlerCloseAlert($event)">
  alert message
</kri-alert>
```

{{ NgDocActions.demo("AlertDemoComponent", { container: false, inputs: {type: "info", showCloseBtn: true, text: "Our website will be undergoing scheduled maintenance tonight from 12:00 AM to 2:00 AM. Please plan accordingly."} }) }}

## Sandbox

This section allows you to interact with different alert variants and configure their parameters in real-time to see how they will look and behave in the interface.

{{ NgDocActions.playground("AlertPlayground") }}
