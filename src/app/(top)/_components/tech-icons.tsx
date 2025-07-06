import { motion } from 'motion/react';
import type { SVGProps } from 'react';

type IconOwnProps = { hovered?: boolean };
type IconProps = Omit<SVGProps<SVGSVGElement>, 'hovered'> & IconOwnProps;

const Vercel = (props: IconProps) => {
  return (
    <svg
      viewBox="0 0 256 222"
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <path fill="#fff" d="m128 0 128 221.705H0z" />
    </svg>
  );
};

const Nextjs = (props: IconProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_408_139"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={180}
      height={180}
    >
      <circle cx={90} cy={90} r={90} fill="black" />
    </mask>
    <g mask="url(#mask0_408_139)">
      <circle
        cx={90}
        cy={90}
        r={87}
        fill="var(--background)"
        stroke="white"
        strokeWidth={6}
      />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="url(#paint0_linear_408_139)"
      />
      <rect
        x={115}
        y={54}
        width={12}
        height={72}
        fill="url(#paint1_linear_408_139)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_408_139"
        x1={109}
        y1={116.5}
        x2={144.5}
        y2={160.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint1_linear_408_139"
        x1={121}
        y1={54}
        x2={120.799}
        y2={106.875}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

const React = (props: IconProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 569 512"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g fill="none" fillRule="evenodd">
      <g
        transform="translate(-227, -256)"
        fill={props.hovered ? '#58C4DC' : '#FFFFFF'}
        className="transition-colors duration-300"
        fillRule="nonzero"
      >
        <g transform="translate(227, 256)">
          <path
            d="M285.5,201 C255.400481,201 231,225.400481 231,255.5 C231,285.599519 255.400481,310 285.5,310 C315.599519,310 340,285.599519 340,255.5 C340,225.400481 315.599519,201 285.5,201"
            id="Path"
          />
          <path
            d="M568.959856,255.99437 C568.959856,213.207656 529.337802,175.68144 466.251623,150.985214 C467.094645,145.423543 467.85738,139.922107 468.399323,134.521063 C474.621631,73.0415145 459.808523,28.6686204 426.709856,9.5541429 C389.677085,-11.8291748 337.36955,3.69129898 284.479928,46.0162134 C231.590306,3.69129898 179.282771,-11.8291748 142.25,9.5541429 C109.151333,28.6686204 94.3382249,73.0415145 100.560533,134.521063 C101.102476,139.922107 101.845139,145.443621 102.708233,151.02537 C97.4493791,153.033193 92.2908847,155.161486 87.3331099,157.39017 C31.0111824,182.708821 0,217.765415 0,255.99437 C0,298.781084 39.6220545,336.307301 102.708233,361.003527 C101.845139,366.565197 101.102476,372.066633 100.560533,377.467678 C94.3382249,438.947226 109.151333,483.32012 142.25,502.434597 C153.629683,508.887578 166.52439,512.186771 179.603923,511.991836 C210.956328,511.991836 247.567589,495.487529 284.479928,465.972527 C321.372196,495.487529 358.003528,511.991836 389.396077,511.991836 C402.475265,512.183856 415.36922,508.884856 426.75,502.434597 C459.848667,483.32012 474.661775,438.947226 468.439467,377.467678 C467.897524,372.066633 467.134789,366.565197 466.291767,361.003527 C529.377946,336.347457 569,298.761006 569,255.99437 M389.155214,27.1025182 C397.565154,26.899606 405.877839,28.9368502 413.241569,33.0055186 C436.223966,46.2772304 446.540955,82.2775015 441.522965,131.770345 C441.181741,135.143488 440.780302,138.556788 440.298575,141.990165 C414.066922,134.08804 387.205771,128.452154 360.010724,125.144528 C343.525021,103.224055 325.192524,82.7564475 305.214266,63.9661533 C336.586743,39.7116483 366.032313,27.1025182 389.135142,27.1025182 M378.356498,310.205598 C368.204912,327.830733 357.150626,344.919965 345.237759,361.405091 C325.045049,363.479997 304.758818,364.51205 284.459856,364.497299 C264.167589,364.51136 243.888075,363.479308 223.702025,361.405091 C211.820914,344.919381 200.80007,327.83006 190.683646,310.205598 C180.532593,292.629285 171.306974,274.534187 163.044553,255.99437 C171.306974,237.454554 180.532593,219.359455 190.683646,201.783142 C200.784121,184.229367 211.770999,167.201087 223.601665,150.764353 C243.824636,148.63809 264.145559,147.579168 284.479928,147.591877 C304.772146,147.579725 325.051559,148.611772 345.237759,150.68404 C357.109048,167.14607 368.136094,184.201112 378.27621,201.783142 C388.419418,219.363718 397.644825,237.458403 405.915303,255.99437 C397.644825,274.530337 388.419418,292.625022 378.27621,310.205598 M419.724813,290.127366 C426.09516,307.503536 431.324985,325.277083 435.380944,343.334682 C417.779633,348.823635 399.836793,353.149774 381.668372,356.285142 C388.573127,345.871232 395.263781,335.035679 401.740334,323.778483 C408.143291,312.655143 414.144807,301.431411 419.805101,290.207679 M246.363271,390.377981 C258.848032,391.140954 271.593728,391.582675 284.5,391.582675 C297.406272,391.582675 310.232256,391.140954 322.737089,390.377981 C310.880643,404.583418 298.10766,417.997563 284.5,430.534446 C270.921643,417.999548 258.18192,404.585125 246.363271,390.377981 Z M187.311556,356.244986 C169.137286,353.123646 151.187726,348.810918 133.578912,343.334682 C137.618549,325.305649 142.828222,307.559058 149.174827,290.207679 C154.754833,301.431411 160.736278,312.655143 167.239594,323.778483 C173.74291,334.901824 180.467017,345.864539 187.311556,356.285142 M149.174827,221.760984 C142.850954,204.473938 137.654787,186.794745 133.619056,168.834762 C151.18418,163.352378 169.085653,159.013101 187.211197,155.844146 C180.346585,166.224592 173.622478,176.986525 167.139234,188.210257 C160.65599,199.433989 154.734761,210.517173 149.074467,221.760984 M322.616657,121.590681 C310.131896,120.827708 297.3862,120.385987 284.379568,120.385987 C271.479987,120.385987 258.767744,120.787552 246.242839,121.590681 C258.061488,107.383537 270.801211,93.9691137 284.379568,81.4342157 C297.99241,93.9658277 310.765727,107.380324 322.616657,121.590681 Z M401.70019,188.210257 C395.196875,176.939676 388.472767,166.09743 381.527868,155.68352 C399.744224,158.819049 417.734224,163.151949 435.380944,168.654058 C431.331963,186.680673 426.122466,204.426664 419.785029,221.781062 C414.205023,210.55733 408.203506,199.333598 401.720262,188.230335 M127.517179,131.790423 C122.438973,82.3176579 132.816178,46.2973086 155.778503,33.0255968 C163.144699,28.9632474 171.455651,26.9264282 179.864858,27.1225964 C202.967687,27.1225964 232.413257,39.7317265 263.785734,63.9862316 C243.794133,82.7898734 225.448298,103.270812 208.949132,125.204763 C181.761691,128.528025 154.90355,134.14313 128.661281,141.990165 C128.199626,138.556788 127.778115,135.163566 127.456963,131.790423 M98.4529773,182.106474 C101.54406,180.767925 104.695358,179.429376 107.906872,178.090828 C114.220532,204.735668 122.781793,230.7969 133.498624,255.99437 C122.761529,281.241316 114.193296,307.357063 107.8868,334.058539 C56.7434387,313.076786 27.0971497,284.003505 27.0971497,255.99437 C27.0971497,229.450947 53.1907013,202.526037 98.4529773,182.106474 Z M155.778503,478.963143 C132.816178,465.691432 122.438973,429.671082 127.517179,380.198317 C127.838331,376.825174 128.259842,373.431953 128.721497,369.978497 C154.953686,377.878517 181.814655,383.514365 209.009348,386.824134 C225.500295,408.752719 243.832321,429.233234 263.805806,448.042665 C220.069,481.834331 180.105722,492.97775 155.838719,478.963143 M441.502893,380.198317 C446.520883,429.691161 436.203894,465.691432 413.221497,478.963143 C388.974566,493.017906 348.991216,481.834331 305.274481,448.042665 C325.241364,429.232737 343.566681,408.752215 360.050868,386.824134 C387.245915,383.516508 414.107066,377.880622 440.338719,369.978497 C440.820446,373.431953 441.221885,376.825174 441.563109,380.198317 M461.193488,334.018382 C454.869166,307.332523 446.294494,281.231049 435.561592,255.99437 C446.289797,230.744081 454.857778,204.629101 461.173416,177.930202 C512.216417,198.911955 541.942994,227.985236 541.942994,255.99437 C541.942994,284.003505 512.296705,313.076786 461.153344,334.058539"
            id="Shape"
          />
        </g>
      </g>
    </g>
  </svg>
);

const TypeScript = (props: IconProps) => (
  <svg
    viewBox="0 0 256 256"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
  >
    <path
      d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z"
      fill={props.hovered ? '#3178C6' : '#FFFFFF'}
      className="transition-colors duration-300"
    />
    <path
      d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z"
      fill={props.hovered ? '#FFFFFF' : 'var(--background)'}
      className="transition-colors duration-300"
    />
  </svg>
);

const TailwindCSS = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 54 33"
    width="1em"
    height="1em"
  >
    <g clipPath="url(#a)">
      <path
        fill={props.hovered ? '#38bdf8' : '#FFFFFF'}
        className="transition-colors duration-300"
        fillRule="evenodd"
        d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h54v32.4H0z" />
      </clipPath>
    </defs>
  </svg>
);

const Shadcnui = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="1em"
    height="1em"
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="#fff"
      strokeWidth={25}
      strokeLinecap="round"
      d="M208 128l-80 80M192 40L40 192"
    />
  </svg>
);

const RadixUI = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#ffff"
    style={{
      marginRight: 3,
    }}
    viewBox="4 0 17 25"
    width="1em"
    height="1em"
  >
    <path
      d="M12 25a8 8 0 1 1 0-16v16zM12 0H4v8h8V0zM17 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
      fill="#ffff"
    />
  </svg>
);

const Motion = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1103 386"
    width="1em"
    height="1em"
  >
    <path
      fill={props.hovered ? '#FFF312' : '#FFFFFF'}
      className="transition-colors duration-300"
      d="M416.473 0 198.54 385.66H0L170.17 84.522C196.549 37.842 262.377 0 317.203 0Zm486.875 96.415c0-53.249 44.444-96.415 99.27-96.415 54.826 0 99.27 43.166 99.27 96.415 0 53.248-44.444 96.415-99.27 96.415-54.826 0-99.27-43.167-99.27-96.415ZM453.699 0h198.54L434.306 385.66h-198.54Zm234.492 0h198.542L716.56 301.138c-26.378 46.68-92.207 84.522-147.032 84.522h-99.27Z"
    />
  </svg>
);

const Mdx = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
  >
    <path
      fill={props.hovered ? '#fcb32c' : '#FFFFFF'}
      className="transition-colors duration-300"
      d="M.79 7.12h22.42c.436 0 .79.355.79.792v8.176c0 .436-.354.79-.79.79H.79a.79.79 0 0 1-.79-.79V7.912a.79.79 0 0 1 .79-.791V7.12Zm2.507 7.605v-3.122l1.89 1.89L7.12 11.56v3.122h1.055v-5.67l-2.99 2.99L2.24 9.056v5.67h1.055v-.001Zm8.44-1.845-1.474-1.473-.746.746 2.747 2.747 2.745-2.747-.746-.746-1.473 1.473v-4h-1.054v4Zm10.041.987-2.175-2.175 2.22-2.22-.746-.746-2.22 2.22-2.22-2.22-.747.746 2.22 2.22-2.176 2.177.746.746 2.177-2.177 2.176 2.175.745-.746Z"
    ></path>
  </svg>
);

const Shiki = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 266 266"
    width="1em"
    height="1em"
  >
    <circle
      cx={219.5}
      cy={46.5}
      r={46.5}
      fill={props.hovered ? '#CB7676' : '#FFFFFF'}
      className="transition-colors duration-300"
    />
    <path
      fill={props.hovered ? '#4B9978' : '#FFFFFF'}
      className="transition-colors duration-300"
      d="M0 48h266v65H0z"
    />
    <path
      fill={props.hovered ? '#83D0DA' : '#FFFFFF'}
      className="transition-colors duration-300"
      d="M109.463 144.426c-.451-5.634-2.564-10.029-6.339-13.184-3.719-3.156-9.381-4.733-16.988-4.733-4.846 0-8.818.591-11.917 1.775-3.042 1.127-5.296 2.676-6.761 4.648-1.465 1.972-2.226 4.226-2.282 6.761-.113 2.085.254 3.973 1.099 5.663.901 1.634 2.31 3.127 4.225 4.479 1.916 1.296 4.367 2.48 7.353 3.55 2.987 1.071 6.536 2.029 10.65 2.874l14.198 3.042c9.579 2.029 17.777 4.705 24.595 8.029 6.817 3.325 12.396 7.241 16.734 11.748 4.339 4.451 7.522 9.466 9.55 15.044 2.085 5.578 3.156 11.663 3.212 18.256-.056 11.381-2.902 21.016-8.536 28.905-5.635 7.888-13.692 13.888-24.172 18.002-10.424 4.113-22.96 6.169-37.61 6.169-15.044 0-28.172-2.225-39.385-6.676-11.156-4.452-19.833-11.298-26.03-20.538-6.142-9.297-9.241-21.186-9.298-35.666h44.625c.282 5.296 1.606 9.747 3.972 13.354 2.367 3.606 5.691 6.338 9.974 8.198 4.338 1.859 9.494 2.789 15.466 2.789 5.015 0 9.212-.62 12.593-1.86 3.381-1.239 5.944-2.958 7.691-5.155 1.747-2.198 2.648-4.705 2.705-7.522-.057-2.648-.93-4.959-2.62-6.931-1.634-2.028-4.339-3.831-8.114-5.409-3.775-1.634-8.874-3.155-15.298-4.564l-17.241-3.718c-15.326-3.325-27.412-8.875-36.258-16.65-8.79-7.832-13.156-18.509-13.1-32.032-.056-10.987 2.874-20.594 8.79-28.82 5.973-8.283 14.227-14.734 24.763-19.355 10.593-4.62 22.735-6.93 36.427-6.93 13.974 0 26.059 2.338 36.258 7.015 10.198 4.677 18.058 11.269 23.58 19.777 5.578 8.452 8.395 18.34 8.452 29.665h-44.963Z"
    />
    <path
      fill={props.hovered ? '#E6CC78' : '#FFFFFF'}
      className="transition-colors duration-300"
      d="M217 0v266h-65V0z"
    />
  </svg>
);

const Codesandbox = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 600 600"
    width="1em"
    height="1em"
  >
    <path
      fill={props.hovered ? '#DCFF50' : '#FFFFFF'}
      className="transition-colors duration-300"
      fillRule="evenodd"
      d="M150 150h299.832v300H150V150Zm269.168 30.682v238.636H180.665V180.682h238.503Z"
      clipRule="evenodd"
    />
  </svg>
);

const Supabase = (props: IconProps) => {
  return (
    <svg
      viewBox="0 0 109 113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
    >
      <path
        d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
        fill="url(#paint1_linear)"
        fillOpacity={0.2}
      />
      <motion.path
        d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
        animate={{ fill: props.hovered ? '#3ECF8E' : '#FFFFFF' }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1={53.9738}
          y1={54.974}
          x2={94.1635}
          y2={71.8295}
          gradientUnits="userSpaceOnUse"
        >
          <motion.stop
            animate={{ stopColor: props.hovered ? '#249361' : '#FFFFFF' }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          />
          <motion.stop
            offset={1}
            animate={{ stopColor: props.hovered ? '#3ECF8E' : '#FFFFFF' }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1={36.1558}
          y1={30.578}
          x2={54.4844}
          y2={65.0806}
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={1} stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Prisma = (props: IconProps) => (
  <svg
    viewBox="0 0 256 310"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
  >
    <path
      fill="#fff"
      d="M254.313 235.519L148 9.749A17.063 17.063 0 00133.473.037a16.87 16.87 0 00-15.533 8.052L2.633 194.848a17.465 17.465 0 00.193 18.747L59.2 300.896a18.13 18.13 0 0020.363 7.489l163.599-48.392a17.929 17.929 0 0011.26-9.722 17.542 17.542 0 00-.101-14.76l-.008.008zm-23.802 9.683l-138.823 41.05c-4.235 1.26-8.3-2.411-7.419-6.685l49.598-237.484c.927-4.443 7.063-5.147 9.003-1.035l91.814 194.973a6.63 6.63 0 01-4.18 9.18h.007z"
    />
  </svg>
);

const Ubuntu = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
  >
    <circle
      cx={50}
      cy={50}
      r={45}
      fill={props.hovered ? '#f47421' : '#FFFFFF'}
      className="transition-colors duration-300"
    />
    <circle
      cx={50}
      cy={50}
      r={21.8}
      fill="none"
      stroke={props.hovered ? '#fff' : 'var(--background)'}
      className="transition-colors duration-300"
      strokeWidth={8.6}
    />
    <g id="a">
      <circle
        cx={19.4}
        cy={50}
        r={8.4}
        fill={props.hovered ? '#f47421' : '#FFFFFF'}
        className="transition-colors duration-300"
      />
      <path
        strokeWidth={3.2}
        d="M67 50h10"
        stroke={props.hovered ? '#f47421' : '#fff'}
        className="transition-colors duration-300"
      />
      <circle
        cx={19.4}
        cy={50}
        r={6}
        fill={props.hovered ? '#fff' : 'var(--background)'}
        className="transition-colors duration-300"
      />
    </g>
    <use xlinkHref="#a" transform="rotate(120 50 50)" />
    <use xlinkHref="#a" transform="rotate(240 50 50)" />
  </svg>
);

const Docker = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
  >
    <path
      fill={props.hovered ? '#008fe2' : '#FFFFFF'}
      className="transition-colors duration-300"
      d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.95-5.43h2.12a.19.19 0 0 0 .18-.19V3.57a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m0 2.71h2.12a.19.19 0 0 0 .18-.18V6.29a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.89c0 .1.09.18.19.18m-2.93 0h2.12a.19.19 0 0 0 .18-.18V6.29a.18.18 0 0 0-.18-.18H8.1a.18.18 0 0 0-.18.18v1.89c0 .1.08.18.18.18m-2.96 0h2.11a.19.19 0 0 0 .19-.18V6.29a.18.18 0 0 0-.19-.18H5.14a.19.19 0 0 0-.19.18v1.89c0 .1.08.18.19.18m5.89 2.72h2.12a.19.19 0 0 0 .18-.19V9.01a.19.19 0 0 0-.18-.19h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m-2.93 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H8.1a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.96 0h2.11a.18.18 0 0 0 .19-.19V9.01a.18.18 0 0 0-.18-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m-2.92 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H2.22a.18.18 0 0 0-.19.18v1.9c0 .1.08.18.19.18m21.54-1.19c-.06-.05-.67-.51-1.95-.51-.34 0-.68.03-1.01.09a3.77 3.77 0 0 0-1.72-2.57l-.34-.2-.23.33a4.6 4.6 0 0 0-.6 1.43c-.24.97-.1 1.88.4 2.66a4.7 4.7 0 0 1-1.75.42H.76a.75.75 0 0 0-.76.75 11.38 11.38 0 0 0 .7 4.06 6.03 6.03 0 0 0 2.4 3.12c1.18.73 3.1 1.14 5.28 1.14.98 0 1.96-.08 2.93-.26a12.25 12.25 0 0 0 3.82-1.4 10.5 10.5 0 0 0 2.61-2.13c1.25-1.42 2-3 2.55-4.4h.23c1.37 0 2.21-.55 2.68-1 .3-.3.55-.66.7-1.06l.1-.28Z"
    />
  </svg>
);

const Nodejs = (props: IconProps) => (
  <svg
    viewBox="0 0 256 292"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
  >
    <defs>
      <linearGradient
        id="a"
        x1="68.188%"
        x2="27.823%"
        y1="17.487%"
        y2="89.755%"
      >
        <stop offset="0%" stopColor="#41873F" />
        <stop offset="32.88%" stopColor="#418B3D" />
        <stop offset="63.52%" stopColor="#419637" />
        <stop offset="93.19%" stopColor="#3FA92D" />
        <stop offset="100%" stopColor="#3FAE2A" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="43.277%"
        x2="159.245%"
        y1="55.169%"
        y2="-18.306%"
      >
        <stop offset="13.76%" stopColor="#41873F" />
        <stop offset="40.32%" stopColor="#54A044" />
        <stop offset="71.36%" stopColor="#66B848" />
        <stop offset="90.81%" stopColor="#6CC04A" />
      </linearGradient>
      <linearGradient
        id="f"
        x1="-4.389%"
        x2="101.499%"
        y1="49.997%"
        y2="49.997%"
      >
        <stop offset="9.192%" stopColor="#6CC04A" />
        <stop offset="28.64%" stopColor="#66B848" />
        <stop offset="59.68%" stopColor="#54A044" />
        <stop offset="86.24%" stopColor="#41873F" />
      </linearGradient>
      <path
        id="b"
        d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"
      />
      <path
        id="e"
        d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"
      />
    </defs>
    <path
      fill="url(#a)"
      d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"
    />
    <mask id="d" fill="#fff">
      <use xlinkHref="#b" />
    </mask>
    <motion.path
      fill="url(#f)"
      d="M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z"
      mask="url(#d)"
    />
    <motion.path
      fill="#FFFFFF"
      animate={{ opacity: props.hovered ? 0 : 1 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      d="M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z"
      mask="url(#d)"
    />
    <mask id="g" fill="#fff">
      <use xlinkHref="#e" />
    </mask>
    <motion.path
      fill="url(#f)"
      d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z"
      mask="url(#g)"
    />
    <motion.path
      fill="#FFFFFF"
      animate={{ opacity: props.hovered ? 0 : 1 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z"
      mask="url(#g)"
    />
  </svg>
);

const Pnpm = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMid meet"
    viewBox="76.58987244897958 44 164.00775510204068 164"
    width="1em"
    height="1em"
  >
    <defs>
      <path
        d="M237.6 95L187.6 95L187.6 45L237.6 45L237.6 95Z"
        id="b45vdTD8hs"
      />
      <path
        d="M182.59 95L132.59 95L132.59 45L182.59 45L182.59 95Z"
        id="a40WtxIl8d"
      />
      <path
        d="M127.59 95L77.59 95L77.59 45L127.59 45L127.59 95Z"
        id="h2CN9AEEpe"
      />
      <path
        d="M237.6 150L187.6 150L187.6 100L237.6 100L237.6 150Z"
        id="dqv5133G8"
      />
      <path
        d="M182.59 150L132.59 150L132.59 100L182.59 100L182.59 150Z"
        id="b1Lv79ypvm"
      />
      <path
        d="M182.59 205L132.59 205L132.59 155L182.59 155L182.59 205Z"
        id="hy1IZWwLX"
      />
      <path
        d="M237.6 205L187.6 205L187.6 155L237.6 155L237.6 205Z"
        id="akQfjxQes"
      />
      <path
        d="M127.59 205L77.59 205L77.59 155L127.59 155L127.59 205Z"
        id="bdSrwE5pk"
      />
    </defs>
    <g>
      <g>
        <use
          xlinkHref="#b45vdTD8hs"
          opacity={1}
          fill={props.hovered ? '#f9ad00' : '#FFFFFF'}
          className="transition-colors duration-300"
          fillOpacity={1}
        />
      </g>
      <g>
        <use
          xlinkHref="#a40WtxIl8d"
          opacity={1}
          fill={props.hovered ? '#f9ad00' : '#FFFFFF'}
          className="transition-colors duration-300"
          fillOpacity={1}
        />
      </g>
      <g>
        <use
          xlinkHref="#h2CN9AEEpe"
          opacity={1}
          fill={props.hovered ? '#f9ad00' : '#FFFFFF'}
          className="transition-colors duration-300"
          fillOpacity={1}
        />
      </g>
      <g>
        <use
          xlinkHref="#dqv5133G8"
          opacity={1}
          fill={props.hovered ? '#f9ad00' : '#FFFFFF'}
          className="transition-colors duration-300"
          fillOpacity={1}
        />
      </g>
      <g>
        <use
          xlinkHref="#b1Lv79ypvm"
          opacity={1}
          fill="#FFFFFF"
          fillOpacity={1}
        />
      </g>
      <g>
        <use
          xlinkHref="#hy1IZWwLX"
          opacity={1}
          fill="#FFFFFF"
          fillOpacity={1}
        />
      </g>
      <g>
        <use
          xlinkHref="#akQfjxQes"
          opacity={1}
          fill="#FFFFFF"
          fillOpacity={1}
        />
      </g>
      <g>
        <use
          xlinkHref="#bdSrwE5pk"
          opacity={1}
          fill="#FFFFFF"
          fillOpacity={1}
        />
      </g>
    </g>
  </svg>
);

const Eslint = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="285.09601"
    width="323.99973"
    viewBox="0 0 323.99971 285.09601"
  >
    <g transform="matrix(1.2548929 0 0 1.2548929 -22.9868 -19.949332)">
      <path
        d="m97.021 99.016l48.432-27.962c1.212-.7 2.706-.7 3.918 0l48.433 27.962c1.211.7 1.959 1.993 1.959 3.393v55.924c0 1.399-.748 2.693-1.959 3.394l-48.433 27.962c-1.212.7-2.706.7-3.918 0l-48.432-27.962c-1.212-.7-1.959-1.994-1.959-3.394v-55.924c.001-1.4.748-2.693 1.959-3.393"
        fill={props.hovered ? '#8080F2' : '#FFFFFF'}
        className="transition-colors duration-300"
      />
      <path
        d="m273.336 124.488l-57.867-100.672c-2.102-3.64-5.985-6.325-10.188-6.325h-115.736c-4.204 0-8.088 2.685-10.19 6.325l-57.867 100.45c-2.102 3.641-2.102 8.236 0 11.877l57.867 99.847c2.102 3.64 5.986 5.501 10.19 5.501h115.735c4.203 0 8.087-1.805 10.188-5.446l57.867-100.01c2.104-3.639 2.104-7.907.001-11.547m-47.917 48.41c0 1.48-.891 2.849-2.174 3.59l-73.71 42.527c-1.282.74-2.888.74-4.17 0l-73.767-42.527c-1.282-.741-2.179-2.109-2.179-3.59v-85.055c0-1.481.884-2.849 2.167-3.59l73.707-42.527c1.282-.741 2.886-.741 4.168 0l73.772 42.527c1.283.741 2.186 2.109 2.186 3.59z"
        fill={props.hovered ? '#4b32c3' : '#FFFFFF'}
        className="transition-colors duration-300"
      />
    </g>
  </svg>
);

const Prettier = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 210 210"
    className="[--blue:#56B3B4] [--gray:#4D616E] [--purple:#BF85BF] [--red:#EA5E5E] [--yellow:#F7B93E]"
  >
    <g fill="none" fillRule="evenodd">
      <g
        transform="translate(0 200)"
        className="*:transition-colors *:duration-300"
      >
        <rect
          width={60}
          height={10}
          x={150}
          opacity={0.5}
          rx={5}
          fill="var(--gray)"
        />
        <rect
          width={70}
          height={10}
          x={70}
          opacity={0.5}
          rx={5}
          fill="var(--gray)"
        />
        <rect
          width={60}
          height={10}
          rx={5}
          fill={props.hovered ? 'var(--red)' : '#FFFFFF'}
        />
      </g>
      <g
        transform="translate(0 180)"
        className="*:transition-colors *:duration-300"
      >
        <rect
          width={50}
          height={10}
          x={160}
          fill="var(--gray)"
          opacity={0.5}
          rx={5}
        />
        <rect
          width={20}
          height={10}
          x={130}
          fill="var(--gray)"
          opacity={0.5}
          rx={5}
        />
        <rect
          width={50}
          height={10}
          x={70}
          fill="var(--gray)"
          opacity={0.5}
          rx={5}
        />
        <rect
          width={20}
          height={10}
          x={40}
          rx={5}
          fill={props.hovered ? 'var(--yellow)' : '#FFFFFF'}
        />
        <rect
          width={30}
          height={10}
          rx={5}
          fill={props.hovered ? 'var(--blue)' : '#FFFFFF'}
        />
      </g>
      <g
        transform="translate(0 160) "
        className="*:transition-colors *:duration-300"
      >
        <rect
          width={100}
          height={10}
          x={110}
          fill="var(--gray)"
          opacity={0.5}
          rx={5}
        />
        <rect
          width={30}
          height={10}
          x={70}
          fill="var(--gray)"
          opacity={0.5}
          rx={5}
        />
        <rect
          width={60}
          height={10}
          rx={5}
          fill={props.hovered ? 'var(--purple)' : '#FFFFFF'}
        />
      </g>
      <g
        transform="translate(0 140)"
        className="*:transition-colors *:duration-300"
      >
        <rect
          width={30}
          height={10}
          x={180}
          opacity={0.5}
          rx={5}
          fill="var(--gray)"
        />
        <rect
          width={30}
          height={10}
          x={140}
          opacity={0.5}
          rx={5}
          fill="var(--gray)"
        />
        <rect
          width={100}
          height={10}
          x={30}
          rx={5}
          fill={props.hovered ? 'var(--yellow)' : '#FFFFFF'}
        />
        <rect
          width={20}
          height={10}
          rx={5}
          fill={props.hovered ? 'var(--purple)' : '#FFFFFF'}
        />
      </g>
      <g
        transform="translate(0 120)"
        className="*:transition-colors *:duration-300"
      >
        <rect
          width={40}
          height={10}
          x={170}
          opacity={0.5}
          rx={5}
          fill="var(--gray)"
        />
        <rect
          width={40}
          height={10}
          x={120}
          rx={5}
          fill={props.hovered ? 'var(--purple)' : '#FFFFFF'}
        />
        <rect
          width={50}
          height={10}
          x={60}
          rx={5}
          fill={props.hovered ? 'var(--red)' : '#FFFFFF'}
        />
        <rect
          width={50}
          height={10}
          rx={5}
          fill={props.hovered ? 'var(--blue)' : '#FFFFFF'}
        />
      </g>
      <g
        transform="translate(0 100)"
        className="*:transition-colors *:duration-300"
      >
        <rect
          width={30}
          height={10}
          x={180}
          opacity={0.5}
          rx={5}
          fill="var(--gray)"
        />
        <rect
          width={90}
          height={10}
          x={80}
          rx={5}
          fill={props.hovered ? 'var(--blue)' : '#FFFFFF'}
        />
        <rect
          width={40}
          height={10}
          x={30}
          rx={5}
          fill={props.hovered ? 'var(--yellow)' : '#FFFFFF'}
        />
        <rect
          width={20}
          height={10}
          rx={5}
          fill={props.hovered ? 'var(--red)' : '#FFFFFF'}
        />
      </g>
      <g
        transform="translate(0 80)"
        className="*:transition-colors *:duration-300"
      >
        <rect
          width={20}
          height={10}
          x={190}
          opacity={0.5}
          rx={5}
          fill="var(--gray)"
        />
        <rect
          width={60}
          height={10}
          x={120}
          rx={5}
          fill={props.hovered ? 'var(--yellow)' : '#FFFFFF'}
        />
        <rect
          width={40}
          height={10}
          x={70}
          opacity={0.5}
          rx={5}
          fill="var(--gray)"
        />
        <rect
          width={60}
          height={10}
          rx={5}
          fill={props.hovered ? 'var(--purple)' : '#FFFFFF'}
        />
      </g>
      <g
        transform="translate(0 60)"
        className="*:transition-colors *:duration-300"
      >
        <rect
          width={20}
          height={10}
          x={190}
          opacity={0.5}
          rx={5}
          fill="var(--gray)"
        />
        <rect
          width={60}
          height={10}
          x={120}
          rx={5}
          fill={props.hovered ? 'var(--red)' : '#FFFFFF'}
        />
        <rect
          width={40}
          height={10}
          x={70}
          opacity={0.5}
          rx={5}
          fill="var(--gray)"
        />
        <rect
          width={20}
          height={10}
          x={40}
          rx={5}
          fill={props.hovered ? 'var(--blue)' : '#FFFFFF'}
        />
        <rect
          width={30}
          height={10}
          rx={5}
          fill={props.hovered ? 'var(--yellow)' : '#FFFFFF'}
        />
      </g>
      <g
        transform="translate(0 40)"
        className="*:transition-colors *:duration-300"
      >
        <rect
          width={30}
          height={10}
          x={180}
          opacity={0.5}
          rx={5}
          fill="var(--gray)"
        />
        <rect
          width={20}
          height={10}
          x={150}
          rx={5}
          fill={props.hovered ? 'var(--blue)' : '#FFFFFF'}
        />
        <rect
          width={50}
          height={10}
          x={90}
          rx={5}
          fill={props.hovered ? 'var(--purple)' : '#FFFFFF'}
        />
        <rect
          width={80}
          height={10}
          rx={5}
          fill={props.hovered ? 'var(--blue)' : '#FFFFFF'}
        />
      </g>
      <g
        transform="translate(0 20)"
        className="*:transition-colors *:duration-300"
      >
        <rect
          width={40}
          height={10}
          x={170}
          opacity={0.5}
          rx={5}
          fill="var(--gray)"
        />
        <rect
          width={110}
          height={10}
          x={50}
          rx={5}
          fill={props.hovered ? 'var(--yellow)' : '#FFFFFF'}
        />
        <rect
          width={40}
          height={10}
          rx={5}
          fill={props.hovered ? 'var(--red)' : '#FFFFFF'}
        />
      </g>
      <rect
        width={70}
        height={10}
        x={140}
        opacity={0.5}
        rx={5}
        fill="var(--gray)"
      />
      <rect
        width={130}
        height={10}
        rx={5}
        fill={props.hovered ? 'var(--blue)' : '#FFFFFF'}
        className="transition-colors duration-300"
      />
    </g>
  </svg>
);

const VisualStudioCode = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
  >
    <mask
      id="a"
      width={100}
      height={100}
      x={0}
      y={0}
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M70.912 99.317a6.223 6.223 0 0 0 4.96-.19l20.589-9.907A6.25 6.25 0 0 0 100 83.587V16.413a6.25 6.25 0 0 0-3.54-5.632L75.874.874a6.226 6.226 0 0 0-7.104 1.21L29.355 38.04 12.187 25.01a4.162 4.162 0 0 0-5.318.236l-5.506 5.009a4.168 4.168 0 0 0-.004 6.162L16.247 50 1.36 63.583a4.168 4.168 0 0 0 .004 6.162l5.506 5.01a4.162 4.162 0 0 0 5.318.236l17.168-13.032L68.77 97.917a6.217 6.217 0 0 0 2.143 1.4ZM75.015 27.3 45.11 50l29.906 22.701V27.3Z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#a)">
      <path
        fill={props.hovered ? '#0065A9' : '#FFFFFF'}
        className="transition-colors duration-300"
        d="M96.461 10.796 75.857.876a6.23 6.23 0 0 0-7.107 1.207l-67.451 61.5a4.167 4.167 0 0 0 .004 6.162l5.51 5.009a4.167 4.167 0 0 0 5.32.236l81.228-61.62c2.725-2.067 6.639-.124 6.639 3.297v-.24a6.25 6.25 0 0 0-3.539-5.63Z"
      />
      <g filter="url(#b)">
        <path
          fill={props.hovered ? '#007ACC' : '#FFFFFF'}
          className="transition-colors duration-300"
          d="m96.461 89.204-20.604 9.92a6.229 6.229 0 0 1-7.107-1.207l-67.451-61.5a4.167 4.167 0 0 1 .004-6.162l5.51-5.009a4.167 4.167 0 0 1 5.32-.236l81.228 61.62c2.725 2.067 6.639.124 6.639-3.297v.24a6.25 6.25 0 0 1-3.539 5.63Z"
        />
      </g>
      <g filter="url(#c)">
        <path
          fill={props.hovered ? '#1F9CF0' : '#FFFFFF'}
          className="transition-colors duration-300"
          d="M75.858 99.126a6.232 6.232 0 0 1-7.108-1.21c2.306 2.307 6.25.674 6.25-2.588V4.672c0-3.262-3.944-4.895-6.25-2.589a6.232 6.232 0 0 1 7.108-1.21l20.6 9.908A6.25 6.25 0 0 1 100 16.413v67.174a6.25 6.25 0 0 1-3.541 5.633l-20.601 9.906Z"
        />
      </g>
      <path
        fill="url(#d)"
        fillRule="evenodd"
        d="M70.851 99.317a6.224 6.224 0 0 0 4.96-.19L96.4 89.22a6.25 6.25 0 0 0 3.54-5.633V16.413a6.25 6.25 0 0 0-3.54-5.632L75.812.874a6.226 6.226 0 0 0-7.104 1.21L29.294 38.04 12.126 25.01a4.162 4.162 0 0 0-5.317.236l-5.507 5.009a4.168 4.168 0 0 0-.004 6.162L16.186 50 1.298 63.583a4.168 4.168 0 0 0 .004 6.162l5.507 5.009a4.162 4.162 0 0 0 5.317.236L29.294 61.96l39.414 35.958a6.218 6.218 0 0 0 2.143 1.4ZM74.954 27.3 45.048 50l29.906 22.701V27.3Z"
        clipRule="evenodd"
        opacity={0.25}
        style={{
          mixBlendMode: 'overlay',
        }}
      />
    </g>
    <defs>
      <filter
        id="b"
        width={116.727}
        height={92.246}
        x={-8.394}
        y={15.829}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={4.167} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          mode="overlay"
          result="effect1_dropShadow"
        />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <filter
        id="c"
        width={47.917}
        height={116.151}
        x={60.417}
        y={-8.076}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={4.167} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          mode="overlay"
          result="effect1_dropShadow"
        />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <linearGradient
        id="d"
        x1={49.939}
        x2={49.939}
        y1={0.258}
        y2={99.742}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

const GitHubCopilot = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 256 208"
    width="1em"
    height="1em"
  >
    <path
      fill="#fff"
      d="M205.3 31.4c14 14.8 20 35.2 22.5 63.6 6.6 0 12.8 1.5 17 7.2l7.8 10.6c2.2 3 3.4 6.6 3.4 10.4v28.7a12 12 0 0 1-4.8 9.5C215.9 187.2 172.3 208 128 208c-49 0-98.2-28.3-123.2-46.6a12 12 0 0 1-4.8-9.5v-28.7c0-3.8 1.2-7.4 3.4-10.5l7.8-10.5c4.2-5.7 10.4-7.2 17-7.2 2.5-28.4 8.4-48.8 22.5-63.6C77.3 3.2 112.6 0 127.6 0h.4c14.7 0 50.4 2.9 77.3 31.4ZM128 78.7c-3 0-6.5.2-10.3.6a27.1 27.1 0 0 1-6 12.1 45 45 0 0 1-32 13c-6.8 0-13.9-1.5-19.7-5.2-5.5 1.9-10.8 4.5-11.2 11-.5 12.2-.6 24.5-.6 36.8 0 6.1 0 12.3-.2 18.5 0 3.6 2.2 6.9 5.5 8.4C79.9 185.9 105 192 128 192s48-6 74.5-18.1a9.4 9.4 0 0 0 5.5-8.4c.3-18.4 0-37-.8-55.3-.4-6.6-5.7-9.1-11.2-11-5.8 3.7-13 5.1-19.7 5.1a45 45 0 0 1-32-12.9 27.1 27.1 0 0 1-6-12.1c-3.4-.4-6.9-.5-10.3-.6Zm-27 44c5.8 0 10.5 4.6 10.5 10.4v19.2a10.4 10.4 0 0 1-20.8 0V133c0-5.8 4.6-10.4 10.4-10.4Zm53.4 0c5.8 0 10.4 4.6 10.4 10.4v19.2a10.4 10.4 0 0 1-20.8 0V133c0-5.8 4.7-10.4 10.4-10.4Zm-73-94.4c-11.2 1.1-20.6 4.8-25.4 10-10.4 11.3-8.2 40.1-2.2 46.2A31.2 31.2 0 0 0 75 91.7c6.8 0 19.6-1.5 30.1-12.2 4.7-4.5 7.5-15.7 7.2-27-.3-9.1-2.9-16.7-6.7-19.9-4.2-3.6-13.6-5.2-24.2-4.3Zm69 4.3c-3.8 3.2-6.4 10.8-6.7 19.9-.3 11.3 2.5 22.5 7.2 27a41.7 41.7 0 0 0 30 12.2c8.9 0 17-2.9 21.3-7.2 6-6.1 8.2-34.9-2.2-46.3-4.8-5-14.2-8.8-25.4-9.9-10.6-1-20 .7-24.2 4.3ZM128 56c-2.6 0-5.6.2-9 .5.4 1.7.5 3.7.7 5.7 0 1.5 0 3-.2 4.5 3.2-.3 6-.3 8.5-.3 2.6 0 5.3 0 8.5.3-.2-1.6-.2-3-.2-4.5.2-2 .3-4 .7-5.7-3.4-.3-6.4-.5-9-.5Z"
    />
  </svg>
);

const Git = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 256 256"
    width="1em"
    height="1em"
  >
    <path
      d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33"
      fill={props.hovered ? '#DE4C36' : '#FFFFFF'}
      className="transition-colors duration-300"
    />
  </svg>
);

const GitHub = (props: IconProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
      transform="scale(64)"
      fill="#ffff"
    />
  </svg>
);

const GitHubActions = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 128 128 "
  >
    <path
      fill={props.hovered ? '#2088ff' : '#FFFFFF'}
      className="transition-colors duration-300"
      d="M26.666 0C11.97 0 0 11.97 0 26.666c0 12.87 9.181 23.651 21.334 26.13v37.87c0 11.77 9.68 21.334 21.332 21.334h.195c1.302 9.023 9.1 16 18.473 16C71.612 128 80 119.612 80 109.334s-8.388-18.668-18.666-18.668c-9.372 0-17.17 6.977-18.473 16h-.195c-8.737 0-16-7.152-16-16V63.779a18.514 18.514 0 0 0 13.24 5.555h2.955c1.303 9.023 9.1 16 18.473 16 9.372 0 17.169-6.977 18.47-16h11.057c1.303 9.023 9.1 16 18.473 16 10.278 0 18.666-8.39 18.666-18.668C128 56.388 119.612 48 109.334 48c-9.373 0-17.171 6.977-18.473 16H79.805c-1.301-9.023-9.098-16-18.471-16s-17.171 6.977-18.473 16h-2.955c-6.433 0-11.793-4.589-12.988-10.672 14.58-.136 26.416-12.05 26.416-26.662C53.334 11.97 41.362 0 26.666 0zm0 5.334A21.292 21.292 0 0 1 48 26.666 21.294 21.294 0 0 1 26.666 48 21.292 21.292 0 0 1 5.334 26.666 21.29 21.29 0 0 1 26.666 5.334zm-5.215 7.541C18.67 12.889 16 15.123 16 18.166v17.043c0 4.043 4.709 6.663 8.145 4.533l13.634-8.455c3.257-2.02 3.274-7.002.032-9.045l-13.635-8.59a5.024 5.024 0 0 0-2.725-.777zm-.117 5.291 13.635 8.588-13.635 8.455V18.166zm40 35.168a13.29 13.29 0 0 1 13.332 13.332A13.293 13.293 0 0 1 61.334 80 13.294 13.294 0 0 1 48 66.666a13.293 13.293 0 0 1 13.334-13.332zm48 0a13.29 13.29 0 0 1 13.332 13.332A13.293 13.293 0 0 1 109.334 80 13.294 13.294 0 0 1 96 66.666a13.293 13.293 0 0 1 13.334-13.332zm-42.568 6.951a2.667 2.667 0 0 0-1.887.78l-6.3 6.294-2.093-2.084a2.667 2.667 0 0 0-3.771.006 2.667 2.667 0 0 0 .008 3.772l3.974 3.96a2.667 2.667 0 0 0 3.766-.001l8.185-8.174a2.667 2.667 0 0 0 .002-3.772 2.667 2.667 0 0 0-1.884-.78zm48 0a2.667 2.667 0 0 0-1.887.78l-6.3 6.294-2.093-2.084a2.667 2.667 0 0 0-3.771.006 2.667 2.667 0 0 0 .008 3.772l3.974 3.96a2.667 2.667 0 0 0 3.766-.001l8.185-8.174a2.667 2.667 0 0 0 .002-3.772 2.667 2.667 0 0 0-1.884-.78zM61.334 96a13.293 13.293 0 0 1 13.332 13.334 13.29 13.29 0 0 1-13.332 13.332A13.293 13.293 0 0 1 48 109.334 13.294 13.294 0 0 1 61.334 96zM56 105.334c-2.193 0-4 1.807-4 4 0 2.195 1.808 4 4 4s4-1.805 4-4c0-2.193-1.807-4-4-4zm10.666 0c-2.193 0-4 1.807-4 4 0 2.195 1.808 4 4 4s4-1.805 4-4c0-2.193-1.807-4-4-4zM56 108c.75 0 1.334.585 1.334 1.334 0 .753-.583 1.332-1.334 1.332-.75 0-1.334-.58-1.334-1.332 0-.75.585-1.334 1.334-1.334zm10.666 0c.75 0 1.334.585 1.334 1.334 0 .753-.583 1.332-1.334 1.332-.75 0-1.332-.58-1.332-1.332 0-.75.583-1.334 1.332-1.334z"
    />
    <path
      fill={props.hovered ? '#79b8ff' : '#FFFFFF'}
      className="transition-colors duration-300"
      d="M109.334 90.666c-9.383 0-17.188 6.993-18.477 16.031a2.667 2.667 0 0 0-.265-.011l-2.7.09a2.667 2.667 0 0 0-2.578 2.751 2.667 2.667 0 0 0 2.752 2.578l2.7-.087a2.667 2.667 0 0 0 .097-.006C92.17 121.029 99.965 128 109.334 128c10.278 0 18.666-8.388 18.666-18.666s-8.388-18.668-18.666-18.668zm0 5.334a13.293 13.293 0 0 1 13.332 13.334 13.29 13.29 0 0 1-13.332 13.332A13.293 13.293 0 0 1 96 109.334 13.294 13.294 0 0 1 109.334 96z"
    />
  </svg>
);

export const icons = [
  {
    icon: Vercel,
    colors: ['#FFFFFF'],
    label: 'Vercel',
    link: 'https://vercel.com/',
  },
  {
    icon: Nextjs,
    colors: ['#FFFFFF'],
    label: 'Next.js',
    link: 'https://nextjs.org/',
  },
  {
    icon: React,
    colors: ['#58C4DC'],
    label: 'React',
    link: 'https://ja.react.dev/',
  },
  {
    icon: TypeScript,
    colors: ['#3178C6'],
    label: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
  },
  {
    icon: TailwindCSS,
    colors: ['#38bdf8'],
    label: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
  },
  {
    icon: Shadcnui,
    colors: ['#FFFFFF'],
    label: 'shadcn/ui',
    link: 'https://ui.shadcn.com/',
  },
  {
    icon: RadixUI,
    colors: ['#FFFFFF'],
    label: 'Radix UI',
    link: 'https://www.radix-ui.com/',
  },
  {
    icon: Motion,
    colors: ['#FFF312'],
    label: 'Motion',
    link: 'https://motion.dev/',
  },
  {
    icon: Mdx,
    colors: ['#fcb32c'],
    label: 'MDX',
    link: 'https://mdxjs.com/',
  },
  {
    icon: Shiki,
    colors: ['#4B9978', '#83D0DA', '#E6CC78'],
    label: 'Shiki',
    link: 'https://shiki.style/',
  },
  {
    icon: Codesandbox,
    colors: ['#DCFF50'],
    label: 'Codesandbox',
    link: 'https://codesandbox.io/',
  },
  {
    icon: Supabase,
    colors: ['#3ECF8E', '#249361'],
    label: 'Supabase',
    link: 'https://supabase.com/',
  },
  {
    icon: Prisma,
    colors: ['#FFFFFF'],
    label: 'Prisma',
    link: 'https://www.prisma.io/',
  },
  {
    icon: Ubuntu,
    colors: ['#FFFFFF', '#F47421'],
    label: 'Ubuntu - WSL',
    link: 'https://learn.microsoft.com/ja-jp/windows/wsl/',
  },
  {
    icon: Docker,
    colors: ['#008FE2'],
    label: 'Docker',
    link: 'https://www.docker.com/ja-jp/',
  },
  {
    icon: Nodejs,
    colors: ['#419637'],
    label: 'Node.js',
    link: 'https://nodejs.org/ja',
  },
  {
    icon: Pnpm,
    colors: ['#FFFFFF', '#F9AD00'],
    label: 'pnpm',
    link: 'https://pnpm.io/ja/',
  },
  {
    icon: Eslint,
    colors: ['#8080F2', '#4B32C3'],
    label: 'ESLint',
    link: 'https://eslint.org/',
  },
  {
    icon: Prettier,
    colors: ['#4D616E', '#F7B93E', '#BF85BF', '#EA5E5E', '#56B3B4'],
    label: 'Prettier',
    link: 'https://prettier.io/',
  },
  {
    icon: VisualStudioCode,
    colors: ['#0065A9', '#007ACC', '#1F9CF0'],
    label: 'VS code',
    link: 'https://code.visualstudio.com/',
  },
  {
    icon: GitHubCopilot,
    colors: ['#FFFFFF'],
    label: 'Github Copilot',
    link: 'https://github.com/features/copilot',
  },
  {
    icon: Git,
    colors: ['#DE4C36'],
    label: 'Git',
    link: 'https://git-scm.com/',
  },
  {
    icon: GitHub,
    colors: ['#FFFFFF'],
    label: 'GitHub',
    link: 'https://github.co.jp/',
  },
  {
    icon: GitHubActions,
    colors: ['#2088FF', '#79B8FF'],
    label: 'GitHub Actions',
    link: 'https://github.co.jp/features/actions',
  },
];
