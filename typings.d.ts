declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
}
declare module 'react-router-dom';
declare module 'react-transition-group';


declare var BUILD_COUNTRY: string;
declare var THEME: string;
declare var BUILD_ENV: string;
declare var BUILD_APPNAME: string;
