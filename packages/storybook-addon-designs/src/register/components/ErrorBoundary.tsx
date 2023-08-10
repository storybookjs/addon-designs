/** @jsx jsx */
import { Component, ErrorInfo, Fragment } from "react";
import { Link, Placeholder } from "@storybook/components";
import { jsx } from "@storybook/theming";

type State =
  | {
      hasError: false;
    }
  | {
      hasError: true;
      error: unknown;
    };

export class ErrorBoundary extends Component {
  public state: State = { hasError: false };

  static getDerivedStateFromError(error: unknown): State {
    return {
      hasError: true,
      error,
    };
  }

  override componentDidCatch(error: unknown, info: ErrorInfo): void {
    console.group(
      "An error occurred during rendering Addon panel of storybook-addon-designs"
    );
    console.log("--- Error ---");
    console.error(error);
    console.log("--- React Component Stack ---");
    console.error(info.componentStack);
    console.groupEnd();
  }

  override render() {
    if (this.state.hasError) {
      return (
        <Placeholder>
          <Fragment>Failed to render addon UI</Fragment>
          <Fragment>
            <p>
              Sorry, this addon has crashed due to the below error has thrown
              during rendering the addon UI.
            </p>
            <pre>{String(this.state.error)}</pre>
            <p>
              See console log for more details. To clear the error state, please
              reload the page.{" "}
              <Link
                href="https://github.com/storybookjs/addon-designs/issues/new?assignees=&labels=category%3A+bug&template=bug_report.yml"
                target="_blank"
                rel="noopener"
                withArrow
                cancel={false}
              >
                Bug report
              </Link>
            </p>
          </Fragment>
        </Placeholder>
      );
    }

    return this.props.children;
  }
}
