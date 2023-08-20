# react-notifywave

**react-notifywave** is a React component library that provides an easy way to create and display notifications with smooth animations. It simplifies the process of adding stylish and user-friendly notifications to your React applications. Whether you want to show success messages, error alerts, or any other type of notifications, react-notifywave has got you covered.

With **react-notifywave**, you can customize the appearance, animation, and behavior of notifications to suit your application's design and user experience. The library offers a variety of pre-built notification styles and also allows you to create your own custom styles.

## Installation

You can easily install **react-notifywave** using npm or yarn:

```bash
npm install react-notifywave
```

or

```bash
yarn add react-notifywave
```

## Usage

1. Import the necessary components from **react-notifywave** in your React component:

```jsx
import { NotificationProvider } from "react-notifywave";
```

2. Wrap your application or the desired part of your application with the `NotificationProvider` component. This should be placed at the top level of your component hierarchy:

```jsx
<React.StrictMode>
  <NotificationProvider position="top_right">
    <App />
  </NotificationProvider>
</React.StrictMode>
```

3. To display a notification, use the `NotificationManager`:

```jsx
import { useNotification } from "react-notifywave";

function MyComponent() {
  const { notify } = useNotification();

  const showNotification = () => {
    notify("This is a success message", "success", 3000, "contain");
  };

  return (
    <div>
      <button onClick={showNotification}>Show Notification</button>
    </div>
  );
}
```

### useNotification-Hook

The `useNotification` provides methods to show different types of notifications:

- `success(message: string, type: 'success', duration?: number, variant: string)`: Display a success notification.
- `error(message: string, type: 'error', duration?: number, variant: string)`: Display an error notification.
- `info(message: string, type: 'info', duration?: number, variant: string)`: Display an info notification.
- `warning(message: string, type: 'warning', duration?: number, variant: string)`: Display a warning notification.

The `NotificationProvider` should be wrapped around your application to render notifications. It doesn't require any props.

## Demo

For Demo please visit: [https://react-notifywave.vercel.app](https://react-notifywave.vercel.app)

For more detailed information, examples, and customization options, please refer to the official documentation of **react-notifywave**.

If you encounter any issues or have suggestions, feel free to create an issue on the GitHub repository. We welcome your feedback and contributions!

GitHub Repository: [https://github.com/rupenjarsaniya/react-notifywave](https://github.com/rupenjarsaniya/react-notifywave)

## Customization

**react-notifywave** provides options for customizing the appearance and behavior of notifications. You can override the default notification styles, animation duration, and other settings to match your application's aesthetics and needs. Check the documentation for more information on customization options.
