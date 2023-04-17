import React, {Component} from 'react';
import Svg, {Defs, Path, G, Mask, Use, Text, TSpan} from 'react-native-svg';

/* ArrowBack(뒤로가기) 실행 Icon */
class ArrowBack extends Component {
  render() {
    return (
      <Svg width={24} height={24} xmlns="http://www.w3.org/2000/svg">
        <G fill="none" fillRule="evenodd">
          <Path d="M0 24h24V0H0z" />
          <Path
            stroke="#151516"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.125 6L5 12l6.125 6m-5.25-6H19"
          />
        </G>
      </Svg>
    );
  }
}

/* Empty Checkbox(비어있는 체크 상자) Icon */
class EmptyCheckbox extends Component {
  render() {
    return (
      <Svg
        width={24}
        height={24}
        viewBox="0 0 21 21"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="m2.5.5h10c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          transform="translate(3 3)"
        />
      </Svg>
    );
  }
}

/* Checkbox(체크 상자) Icon */
class Checkbox extends Component {
  render() {
    return (
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <G id="Interface / Checkbox_Check">
          <Path
            id="Vector"
            d="M8 12L11 15L16 9M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z"
            stroke="#885FFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </G>
      </Svg>
    );
  }
}

/* Showeye(비밀번호 암호화 활성) Icon */
class Showeye extends Component {
  render() {
    return (
      <Svg
        fill="#000000"
        width={24}
        height={24}
        viewBox="0 0 1920 1920"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M960 1489.82c-348.474 0-668.545-202.323-841.298-529.918C291.455 632.306 611.526 429.984 960 429.984s668.545 202.322 841.298 529.918C1628.545 1287.497 1308.474 1489.82 960 1489.82Zm948.342-553.552C1720.645 558.648 1357.332 324 960 324c-397.333 0-760.645 234.648-948.342 612.268L0 959.902l11.658 23.634c187.697 377.62 551.01 612.268 948.342 612.268 397.333 0 760.645-234.648 948.342-612.268L1920 959.902l-11.658-23.634ZM960 1171.869c-116.9 0-211.967-95.067-211.967-211.967 0-116.9 95.067-211.967 211.967-211.967 116.9 0 211.967 95.067 211.967 211.967 0 116.9-95.067 211.967-211.967 211.967m0-529.918c-175.297 0-317.951 142.654-317.951 317.951 0 175.297 142.654 317.95 317.951 317.95 175.297 0 317.951-142.653 317.951-317.95S1135.297 641.951 960 641.951"
          fill-rule="evenodd"
        />
      </Svg>
    );
  }
}

/* Hideeye(비밀번호 암호화 비활성) Icon */
class Hideeye extends Component {
  render() {
    return (
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M20 14.8335C21.3082 13.3317 22 12 22 12C22 12 18.3636 5 12 5C11.6588 5 11.3254 5.02013 11 5.05822C10.6578 5.09828 10.3244 5.15822 10 5.23552M12 9C12.3506 9 12.6872 9.06015 13 9.17071C13.8524 9.47199 14.528 10.1476 14.8293 11C14.9398 11.3128 15 11.6494 15 12M3 3L21 21M12 15C11.6494 15 11.3128 14.9398 11 14.8293C10.1476 14.528 9.47198 13.8524 9.1707 13C9.11386 12.8392 9.07034 12.6721 9.04147 12.5M4.14701 9C3.83877 9.34451 3.56234 9.68241 3.31864 10C2.45286 11.1282 2 12 2 12C2 12 5.63636 19 12 19C12.3412 19 12.6746 18.9799 13 18.9418"
          stroke="#000000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    );
  }
}

/* Hospital(바텀탭바 병원추천받기Icon) Icon */
class Hospital extends Component {
  render() {
    return (
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M2 22H22"
          stroke={this.props.color}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M17 2H7C4 2 3 3.79 3 6V22H21V6C21 3.79 20 2 17 2Z"
          stroke={this.props.color}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14.06 15H9.92998C9.41998 15 8.98999 15.42 8.98999 15.94V22H14.99V15.94C15 15.42 14.58 15 14.06 15Z"
          stroke={this.props.color}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M12 6V11"
          stroke={this.props.color}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9.5 8.5H14.5"
          stroke={this.props.color}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    );
  }
}

/* Health(바텀탭바 건강기록Icon) Icon */
class Health extends Component {
  render() {
    return (
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M4 11.9998H8L9.5 8.99976L11.5 13.9998L13 11.9998H15M12 6.42958C12.4844 5.46436 13.4683 4.72543 14.2187 4.35927C16.1094 3.43671 17.9832 3.91202 19.5355 5.46436C21.4881 7.41698 21.4881 10.5828 19.5355 12.5354L12.7071 19.3639C12.3166 19.7544 11.6834 19.7544 11.2929 19.3639L4.46447 12.5354C2.51184 10.5828 2.51184 7.41698 4.46447 5.46436C6.0168 3.91202 7.89056 3.43671 9.78125 4.35927C10.5317 4.72543 11.5156 5.46436 12 6.42958Z"
          stroke={this.props.color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    );
  }
}

/* UserInfo(바텀탭바 내정보Icon) Icon */
class UserInfo extends Component {
  render() {
    return (
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <G id="User / User_01">
          <Path
            d="M19 21C19 17.134 15.866 14 12 14C8.13401 14 5 17.134 5 21M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z"
            stroke={this.props.color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </G>
      </Svg>
    );
  }
}

{
  /* HospitalHomeScreen */
}
/* humanBody(사람 신체Icon) Icon _ hospitalHomeScreen */
class HumanBody extends Component {
  render() {
    return (
      <Svg
        fill="rgb(136,95,255)"
        xmlns="http://www.w3.org/2000/svg"
        width={80}
        height={80}
        viewBox="0 0 206.326 206.326">
        <G>
          <G>
            <Path
              d="M104.265,117.959c-0.304,3.58,2.126,22.529,3.38,29.959c0.597,3.52,2.234,9.255,1.645,12.3
       c-0.841,4.244-1.084,9.736-0.621,12.934c0.292,1.942,1.211,10.899-0.104,14.175c-0.688,1.718-1.949,10.522-1.949,10.522
       c-3.285,8.294-1.431,7.886-1.431,7.886c1.017,1.248,2.759,0.098,2.759,0.098c1.327,0.846,2.246-0.201,2.246-0.201
       c1.139,0.943,2.467-0.116,2.467-0.116c1.431,0.743,2.758-0.627,2.758-0.627c0.822,0.414,1.023-0.109,1.023-0.109
       c2.466-0.158-1.376-8.05-1.376-8.05c-0.92-7.088,0.913-11.033,0.913-11.033c6.004-17.805,6.309-22.53,3.909-29.24
       c-0.676-1.937-0.847-2.704-0.536-3.545c0.719-1.941,0.195-9.748,1.072-12.848c1.692-5.979,3.361-21.142,4.231-28.217
       c1.169-9.53-4.141-22.308-4.141-22.308c-1.163-5.2,0.542-23.727,0.542-23.727c2.381,3.705,2.29,10.245,2.29,10.245
       c-0.378,6.859,5.541,17.342,5.541,17.342c2.844,4.332,3.921,8.442,3.921,8.747c0,1.248-0.273,4.269-0.273,4.269l0.109,2.631
       c0.049,0.67,0.426,2.977,0.365,4.092c-0.444,6.862,0.646,5.571,0.646,5.571c0.92,0,1.931-5.522,1.931-5.522
       c0,1.424-0.348,5.687,0.42,7.295c0.919,1.918,1.595-0.329,1.607-0.78c0.243-8.737,0.768-6.448,0.768-6.448
       c0.511,7.088,1.139,8.689,2.265,8.135c0.853-0.407,0.073-8.506,0.073-8.506c1.461,4.811,2.569,5.577,2.569,5.577
       c2.411,1.693,0.92-2.983,0.585-3.909c-1.784-4.92-1.839-6.625-1.839-6.625c2.229,4.421,3.909,4.257,3.909,4.257
       c2.174-0.694-1.9-6.954-4.287-9.953c-1.218-1.528-2.789-3.574-3.245-4.789c-0.743-2.058-1.304-8.674-1.304-8.674
       c-0.225-7.807-2.155-11.198-2.155-11.198c-3.3-5.282-3.921-15.135-3.921-15.135l-0.146-16.635
       c-1.157-11.347-9.518-11.429-9.518-11.429c-8.451-1.258-9.627-3.988-9.627-3.988c-1.79-2.576-0.767-7.514-0.767-7.514
       c1.485-1.208,2.058-4.415,2.058-4.415c2.466-1.891,2.345-4.658,1.206-4.628c-0.914,0.024-0.707-0.733-0.707-0.733
       C115.068,0.636,104.01,0,104.01,0h-1.688c0,0-11.063,0.636-9.523,13.089c0,0,0.207,0.758-0.715,0.733
       c-1.136-0.03-1.242,2.737,1.215,4.628c0,0,0.572,3.206,2.058,4.415c0,0,1.023,4.938-0.767,7.514c0,0-1.172,2.73-9.627,3.988
       c0,0-8.375,0.082-9.514,11.429l-0.158,16.635c0,0-0.609,9.853-3.922,15.135c0,0-1.921,3.392-2.143,11.198
       c0,0-0.563,6.616-1.303,8.674c-0.451,1.209-2.021,3.255-3.249,4.789c-2.408,2.993-6.455,9.24-4.29,9.953
       c0,0,1.689,0.164,3.909-4.257c0,0-0.046,1.693-1.827,6.625c-0.35,0.914-1.839,5.59,0.573,3.909c0,0,1.117-0.767,2.569-5.577
       c0,0-0.779,8.099,0.088,8.506c1.133,0.555,1.751-1.047,2.262-8.135c0,0,0.524-2.289,0.767,6.448
       c0.012,0.451,0.673,2.698,1.596,0.78c0.779-1.608,0.429-5.864,0.429-7.295c0,0,0.999,5.522,1.933,5.522
       c0,0,1.099,1.291,0.648-5.571c-0.073-1.121,0.32-3.422,0.369-4.092l0.106-2.631c0,0-0.274-3.014-0.274-4.269
       c0-0.311,1.078-4.415,3.921-8.747c0,0,5.913-10.488,5.532-17.342c0,0-0.082-6.54,2.299-10.245c0,0,1.69,18.526,0.545,23.727
       c0,0-5.319,12.778-4.146,22.308c0.864,7.094,2.53,22.237,4.226,28.217c0.886,3.094,0.362,10.899,1.072,12.848
       c0.32,0.847,0.152,1.627-0.536,3.545c-2.387,6.71-2.083,11.436,3.921,29.24c0,0,1.848,3.945,0.914,11.033
       c0,0-3.836,7.892-1.379,8.05c0,0,0.192,0.523,1.023,0.109c0,0,1.327,1.37,2.761,0.627c0,0,1.328,1.06,2.463,0.116
       c0,0,0.91,1.047,2.237,0.201c0,0,1.742,1.175,2.777-0.098c0,0,1.839,0.408-1.435-7.886c0,0-1.254-8.793-1.945-10.522
       c-1.318-3.275-0.387-12.251-0.106-14.175c0.453-3.216,0.21-8.695-0.618-12.934c-0.606-3.038,1.035-8.774,1.641-12.3
       c1.245-7.423,3.685-26.373,3.38-29.959l1.008,0.354C103.809,118.312,104.265,117.959,104.265,117.959z"
            />
          </G>
        </G>
      </Svg>
    );
  }
}

/* medicalDepartment(진료과Icon) Icon _ hospitalHomeScreen */
class MedicalDepartment extends Component {
  render() {
    return (
      <Svg
        fill="rgb(136,95,255)"
        xmlns="http://www.w3.org/2000/svg"
        width={70}
        height={70}
        viewBox="0 0 512 512">
        <G>
          <Path
            d="M469.797,93.801c0-8.828-1.453-17.5-4.625-25.625c-2.391-6.063-5.734-11.781-10.063-16.875
		c-6.5-7.656-15.172-13.781-25.516-17.828c-10.344-4.063-22.328-6.125-35.875-6.125v26.594c9.641,0,17.531,1.313,23.859,3.453
		c9.484,3.25,15.406,8.078,19.438,14.031c4,5.953,6.156,13.469,6.188,22.375c0.016,11.594-3.828,25.359-11.609,38.828
		c-5.141,8.953-12.328,20.094-20.469,32.094l-6.297-4.25v-0.016c-15.844,23.359-35.563,50.281-52.063,72.531
		c-8.25,11.156-15.688,21.141-21.516,29.016c-2.906,3.938-5.422,7.359-7.438,10.203c-1.031,1.406-1.922,2.688-2.719,3.844
		s-1.469,2.156-2.172,3.297c-0.875,1.438-2.453,3.469-4.563,5.516c-3.188,3.094-7.547,6.266-12.734,8.531
		c-5.203,2.281-11.172,3.75-18.109,3.75c-9.219,0-16.828-2.609-23-6.266c-3.078-1.844-5.734-3.938-7.844-6.016
		c-2.125-2.047-3.688-4.078-4.563-5.516c-0.703-1.141-1.375-2.141-2.172-3.297c-1.5-2.172-3.359-4.766-5.641-7.906
		c-7.969-10.906-20.906-28.141-35.203-47.547c-14.281-19.422-29.906-41-42.891-60.141l-6.297,4.266
		c-8.156-12.016-15.313-23.125-20.484-32.094c-7.75-13.469-11.609-27.234-11.594-38.828c0-5.938,0.984-11.266,2.797-15.906
		c1.359-3.484,3.203-6.578,5.563-9.359c3.547-4.141,8.281-7.656,14.984-10.297c6.656-2.625,15.281-4.297,26.141-4.297V27.348
		c-12.063,0-22.859,1.625-32.375,4.859c-14.266,4.766-25.672,13.375-33.031,24.391c-7.375,11-10.672,23.984-10.672,37.203
		c0.016,17.297,5.453,35.219,15.141,52.109c5.688,9.875,13.156,21.422,21.516,33.766l-6.297,4.266
		c16.516,24.297,36.453,51.5,53.078,73.953c8.313,11.203,15.75,21.188,21.469,28.938c2.844,3.859,5.281,7.156,7.109,9.719
		c0.906,1.266,1.672,2.328,2.234,3.188c0.563,0.828,0.969,1.438,1.031,1.531c2.922,4.75,6.594,9.25,11,13.547
		c6.609,6.453,14.969,12.391,25.078,16.844c4.344,1.922,9.047,3.516,14.016,4.734v79.594c0,7.281-1.594,14.094-4.531,20.453
		c-4.375,9.516-11.953,17.969-21.797,24.031c-9.828,6.078-21.844,9.734-34.984,9.734c-17.516,0-33.063-6.5-44.031-16.531
		c-5.484-5.031-9.813-10.891-12.75-17.234c-2.938-6.359-4.531-13.172-4.531-20.453v-0.438c12.234-3.656,23.203-10.266,31.969-19.047
		c13.734-13.719,22.266-32.813,22.25-53.734c0.016-20.969-8.516-40.047-22.25-53.75c-13.719-13.734-32.781-22.281-53.734-22.266
		c-20.969-0.016-40.031,8.531-53.766,22.266c-13.719,13.703-22.25,32.781-22.25,53.75c0,20.922,8.531,40.016,22.25,53.734
		c9.188,9.172,20.797,15.954,33.734,19.485c-0.016,13.453,3,26.422,8.406,38.016c8.063,17.453,21.359,31.922,37.766,42.047
		s36.031,15.953,56.938,15.953c27.891-0.016,53.453-10.328,72.234-27.469c9.391-8.594,17.109-18.906,22.484-30.531
		c5.391-11.594,8.406-24.563,8.391-38.016v-79.61c8.797-2.156,16.734-5.531,23.563-9.625c5.969-3.578,11.141-7.641,15.531-11.938
		c4.438-4.297,8.078-8.797,11-13.547c0.078-0.094,0.469-0.703,1.047-1.531c1.078-1.578,2.813-3.984,4.953-6.953
		c7.625-10.453,20.672-27.813,35.094-47.406c14.453-19.625,30.281-41.516,43.828-61.438l-6.281-4.266
		c8.344-12.328,15.813-23.922,21.516-33.766C464.344,129.02,469.781,111.098,469.797,93.801z M118.219,395.958
		c-14.75-0.016-27.969-5.938-37.625-15.578C70.938,370.708,65,357.473,65,342.77c0-14.75,5.938-27.969,15.594-37.656
		c9.656-9.609,22.875-15.547,37.625-15.563c14.719,0.016,27.953,5.953,37.594,15.563c9.672,9.688,15.594,22.906,15.609,37.656
		c-0.016,14.703-5.938,27.938-15.609,37.609C146.172,390.02,132.938,395.942,118.219,395.958z"
          />
          <Path
            d="M232.813,79.286c3.906-2.734,6.25-7.219,6.25-12V14.614c0-4.766-2.344-9.25-6.25-11.969
		c-3.906-2.75-8.906-3.391-13.391-1.75L187.5,12.614v56.703l31.922,11.688C223.906,82.661,228.906,82.004,232.813,79.286z"
          />
          <Path
            d="M334.469,79.286c3.906,2.719,8.922,3.375,13.406,1.734l31.922-11.703V12.614L347.875,0.895
		c-4.484-1.656-9.5-1-13.406,1.75c-3.906,2.734-6.234,7.203-6.234,11.969v52.672C328.234,72.067,330.563,76.551,334.469,79.286z"
          />
          <Path
            d="M118.219,313.973c-15.906,0-28.797,12.891-28.797,28.797c0,15.875,12.891,28.75,28.797,28.75
		c15.891,0,28.766-12.875,28.766-28.75C146.984,326.864,134.109,313.973,118.219,313.973z M130.5,355.036
		c-3.172,3.156-7.484,5.078-12.281,5.094c-4.828-0.016-9.125-1.938-12.313-5.094c-3.141-3.156-5.063-7.469-5.078-12.266
		c0.016-4.828,1.938-9.156,5.078-12.297c3.188-3.156,7.484-5.094,12.313-5.109c4.797,0.016,9.109,1.953,12.281,5.109
		c3.156,3.141,5.078,7.469,5.078,12.297C135.578,347.567,133.656,351.879,130.5,355.036z"
          />
        </G>
      </Svg>
    );
  }
}

/* HealthMemo(건강 기록Icon) Icon _ hospitalHomeScreen */
class HealthMemo extends Component {
  render() {
    return (
      <Svg
        width={60}
        height={60}
        viewBox="0 0 20.2 20.2"
        xmlns="http://www.w3.org/2000/svg">
        <G id="medical-receipt-3" transform="translate(-2 -2)">
          <Path
            d="M7,8h6M7,12h4m5.73.73a2.52,2.52,0,0,1,3.54,0h0a2.52,2.52,0,0,1,0,3.54l-4,4a2.52,2.52,0,0,1-3.54,0h0a2.52,2.52,0,0,1,0-3.54ZM18.2,18.2l-3.4-3.4"
            fill="none"
            stroke="rgb(245,56,116 )"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <Path
            data-name="primary"
            d="M8,21H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H16a1,1,0,0,1,1,1V8"
            fill="none"
            stroke="rgb(245,56,116 )"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </G>
      </Svg>
    );
  }
}

{
  /* MedicalDepartmentScreen */
}

export default Icons = {
  //Icon _ Global
  arrowBack: ArrowBack,
  emptyCheckbox: EmptyCheckbox,
  checkbox: Checkbox,
  showeye: Showeye,
  hideeye: Hideeye,
  hospital: Hospital,
  health: Health,
  userInfo: UserInfo,

  //Icon _ hospitalScreen
  humanBody: HumanBody,
  medicalDepartment: MedicalDepartment,
  healthMemo: HealthMemo,

  //Icon _ bodyPartScreen

  //Icon _ MedicalDepartmentScreen
};
