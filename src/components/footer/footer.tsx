import Image from "next/image";
import React from "react";
import logo from "@/images/logoAtualizadaFotter.png";
import borderFooter from "@/images/border-footer.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-600 w-full h-full px-2 flex flex-col gap-2 text-white py-10">
      <div className="w-full  flex  justify-around items-center">
        {/* Logo e links */}
        <div className="flex items-center flex-col md:flex-row  gap-4">
          <Image
            src={logo}
            alt="Caça Palavras Didáticos"
            width={250}
            height={200}
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="flex items-center ">
          {/* Cascata de links ao lado do logo */}
          <div className="flex flex-col text-sm md:ml-10 md:pl-36 space-y-2">
            <Link href="/site-protection" className="text-xs mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="180"
                height="34"
                viewBox="0 0 130 34"
                fill="none"
              >
                <g clip-path="url(#clip0_6_4501)">
                  <path
                    d="M27.3195 5.39698L14.5603 0.0995263C14.2407 -0.0331429 13.8814 -0.033208 13.5619 0.0995263L0.80272 5.39698C0.316765 5.59878 0 6.07322 0 6.5994V13.0392C0 21.9063 5.35943 29.8826 13.5691 33.2335C13.8844 33.3622 14.2377 33.3622 14.5531 33.2335C22.7627 29.8826 28.1222 21.9064 28.1222 13.0392V6.5994C28.1222 6.07322 27.8055 5.59878 27.3195 5.39698ZM25.5183 13.0392C25.5183 20.5772 21.0917 27.5164 14.0611 30.6139C7.21842 27.5991 2.60391 20.7815 2.60391 13.0392V7.46859L14.0611 2.71164L25.5183 7.46859V13.0392ZM12.6221 17.4277L18.2181 11.8317C18.7265 11.3233 19.5509 11.3232 20.0593 11.8317C20.5678 12.3402 20.5678 13.1645 20.0593 13.6729L13.5427 20.1895C13.0341 20.6981 12.2098 20.6979 11.7014 20.1895L8.06287 16.551C7.55439 16.0425 7.55439 15.2181 8.06287 14.7097C8.57135 14.2013 9.39568 14.2013 9.90409 14.7097L12.6221 17.4277Z"
                    fill="#43BF60"
                  />
                  <path
                    d="M39.9338 5.04843C39.6849 4.80549 39.3975 4.61588 39.0717 4.4796C38.7458 4.34332 38.408 4.27518 38.0584 4.27518C37.5785 4.27518 37.1385 4.39072 36.7386 4.62181C36.3386 4.8529 36.0216 5.16842 35.7875 5.56838C35.5535 5.96834 35.4365 6.40533 35.4365 6.87936C35.4365 7.35339 35.5535 7.7889 35.7875 8.1859C36.0216 8.5829 36.3386 8.89842 36.7386 9.13247C37.1385 9.36652 37.5785 9.48355 38.0584 9.48355C38.4021 9.48355 38.7369 9.41689 39.0628 9.28357C39.3887 9.15024 39.679 8.96508 39.9338 8.72807L40.3071 9.12802C39.999 9.41244 39.6464 9.6376 39.2494 9.80351C38.8524 9.96942 38.4465 10.0524 38.0318 10.0524C37.4451 10.0524 36.9059 9.91017 36.4141 9.62575C35.9223 9.34134 35.5327 8.95619 35.2454 8.47031C34.958 7.98443 34.8143 7.45412 34.8143 6.87936C34.8143 6.3046 34.9595 5.77725 35.2498 5.2973C35.5402 4.81734 35.9327 4.43664 36.4275 4.15519C36.9222 3.87373 37.4629 3.73301 38.0495 3.73301C38.4702 3.73301 38.8761 3.81152 39.2672 3.96854C39.6583 4.12556 40.0019 4.34332 40.2982 4.62181L39.9338 5.04843ZM44.1289 3.73301C44.7215 3.73301 45.2651 3.87373 45.7599 4.15519C46.2546 4.43664 46.6472 4.81734 46.9375 5.2973C47.2279 5.77725 47.373 6.3046 47.373 6.87936C47.373 7.45412 47.2279 7.98443 46.9375 8.47031C46.6472 8.95619 46.2546 9.34134 45.7599 9.62575C45.2651 9.91017 44.7215 10.0524 44.1289 10.0524C43.5364 10.0524 42.9927 9.91017 42.498 9.62575C42.0032 9.34134 41.6107 8.95619 41.3203 8.47031C41.03 7.98443 40.8848 7.45412 40.8848 6.87936C40.8848 6.3046 41.03 5.77725 41.3203 5.2973C41.6107 4.81734 42.0032 4.43664 42.498 4.15519C42.9927 3.87373 43.5364 3.73301 44.1289 3.73301ZM44.1378 4.28407C43.6638 4.28407 43.2253 4.39961 42.8224 4.6307C42.4195 4.86179 42.0995 5.17583 41.8625 5.57282C41.6255 5.96982 41.507 6.40533 41.507 6.87936C41.507 7.35339 41.6255 7.79186 41.8625 8.19479C42.0995 8.59771 42.4195 8.91619 42.8224 9.15025C43.2253 9.3843 43.6638 9.50132 44.1378 9.50132C44.6059 9.50132 45.0399 9.3843 45.4399 9.15025C45.8399 8.91619 46.1583 8.59771 46.3954 8.19479C46.6324 7.79186 46.7509 7.35339 46.7509 6.87936C46.7509 6.40533 46.6324 5.96982 46.3954 5.57282C46.1583 5.17583 45.8399 4.86179 45.4399 4.6307C45.0399 4.39961 44.6059 4.28407 44.1378 4.28407ZM48.724 3.77745H49.4884L51.9237 8.44365L54.3323 3.77745H55.0967V9.99905H54.5279L54.519 4.6307L52.0837 9.33245H51.7459L49.3017 4.6307V9.99905H48.724V3.77745ZM59.3452 3.78634C60.1155 3.78634 60.711 3.96558 61.1317 4.32406C61.5524 4.68255 61.7627 5.19064 61.7627 5.84835C61.7627 6.52977 61.5524 7.05712 61.1317 7.43042C60.711 7.80372 60.1155 7.99036 59.3452 7.99036H57.6653V9.99905H57.0521V3.78634H59.3452ZM59.3185 7.43931C59.9111 7.43931 60.3688 7.30451 60.6917 7.0349C61.0146 6.7653 61.1761 6.37571 61.1761 5.86613C61.1761 5.3684 61.0161 4.98918 60.6962 4.72847C60.3762 4.46775 59.917 4.33739 59.3185 4.33739H57.6653V7.43931H59.3185ZM67.0866 9.99905L65.7445 7.97259C65.5549 7.98444 65.4098 7.99036 65.309 7.99036H63.6025V9.99905H62.9893V3.78634H65.309C66.0853 3.78634 66.6852 3.96558 67.1088 4.32406C67.5325 4.68255 67.7443 5.19064 67.7443 5.84835C67.7443 6.36386 67.6199 6.79344 67.371 7.13711C67.1222 7.48078 66.7667 7.72076 66.3045 7.85704L67.7977 9.99905H67.0866ZM65.309 7.43931C65.9016 7.43931 66.3578 7.30451 66.6778 7.0349C66.9977 6.7653 67.1577 6.37571 67.1577 5.86613C67.1577 5.3684 66.9977 4.98918 66.6778 4.72847C66.3578 4.46775 65.9016 4.33739 65.309 4.33739H63.6025V7.43931H65.309ZM74.0548 9.99905L73.3171 8.34588H69.8686L69.1398 9.99905H68.482L71.2818 3.78634H71.9217L74.7214 9.99905H74.0548ZM70.1086 7.79483H73.0771L71.584 4.43516L70.1086 7.79483ZM81.6363 4.79957C81.3815 4.63958 81.103 4.51663 80.8008 4.43072C80.4986 4.3448 80.2142 4.30184 79.9476 4.30184C79.5209 4.30184 79.1788 4.38628 78.921 4.55515C78.6633 4.72402 78.5344 4.95363 78.5344 5.24397C78.5344 5.49876 78.6055 5.70614 78.7477 5.86613C78.8899 6.02611 79.0647 6.15203 79.2721 6.24387C79.4795 6.33571 79.7639 6.43792 80.1253 6.55051C80.546 6.67494 80.8853 6.79789 81.143 6.91936C81.4008 7.04083 81.62 7.2171 81.8007 7.44819C81.9814 7.67928 82.0718 7.98443 82.0718 8.36366C82.0718 8.69548 81.9785 8.98878 81.7918 9.24357C81.6052 9.49836 81.343 9.69538 81.0052 9.83462C80.6675 9.97387 80.2794 10.0435 79.8409 10.0435C79.4084 10.0435 78.9862 9.95757 78.5744 9.78574C78.1626 9.6139 77.8085 9.38578 77.5123 9.10136L77.7967 8.59475C78.0752 8.86731 78.3981 9.08062 78.7655 9.23468C79.1328 9.38874 79.4943 9.46577 79.8498 9.46577C80.3238 9.46577 80.7001 9.36948 80.9786 9.17691C81.2571 8.98433 81.3963 8.7251 81.3963 8.39921C81.3963 8.13849 81.3252 7.92518 81.183 7.75927C81.0408 7.59336 80.866 7.46597 80.6586 7.37709C80.4512 7.28821 80.1609 7.18452 79.7876 7.06601C79.3669 6.93565 79.0291 6.8127 78.7744 6.69716C78.5196 6.58161 78.3033 6.40978 78.1255 6.18165C77.9478 5.95353 77.8589 5.65578 77.8589 5.28841C77.8589 4.97437 77.9478 4.69884 78.1255 4.46182C78.3033 4.22481 78.5521 4.04261 78.8721 3.91521C79.1921 3.78782 79.5624 3.72412 79.9831 3.72412C80.3209 3.72412 80.6601 3.77449 81.0008 3.87522C81.3415 3.97595 81.6422 4.10927 81.9029 4.27518L81.6363 4.79957ZM83.5916 3.78634H87.7512V4.33739H84.2049V6.55939H87.3779V7.11045H84.2049V9.44799H87.8668V9.99905H83.5916V3.78634ZM93.7329 6.95935H94.275V9.23468C93.9728 9.48947 93.6218 9.68945 93.2218 9.83462C92.8218 9.97979 92.4145 10.0524 91.9997 10.0524C91.4131 10.0524 90.8724 9.91017 90.3776 9.62575C89.8829 9.34134 89.4903 8.95619 89.2 8.47031C88.9096 7.98443 88.7645 7.45412 88.7645 6.87936C88.7645 6.3046 88.9096 5.77725 89.2 5.2973C89.4903 4.81734 89.8858 4.43664 90.3865 4.15519C90.8872 3.87373 91.4338 3.73301 92.0264 3.73301C92.4471 3.73301 92.8544 3.80707 93.2485 3.95521C93.6425 4.10334 93.9906 4.31073 94.2928 4.57737L93.9373 5.01288C93.6825 4.77587 93.3892 4.59366 93.0574 4.46627C92.7256 4.33887 92.3819 4.27518 92.0264 4.27518C91.5464 4.27518 91.105 4.3922 90.702 4.62625C90.2991 4.86031 89.9792 5.17583 89.7421 5.57282C89.5051 5.96982 89.3866 6.40533 89.3866 6.87936C89.3866 7.35932 89.5051 7.79927 89.7421 8.19923C89.9792 8.59919 90.3006 8.91619 90.7065 9.15025C91.1124 9.3843 91.5553 9.50132 92.0352 9.50132C92.3315 9.50132 92.6263 9.45244 92.9196 9.35467C93.2129 9.2569 93.484 9.11914 93.7329 8.94138V6.95935ZM96.5504 7.47486C96.5504 8.1148 96.7237 8.61252 97.0703 8.96804C97.4169 9.32356 97.8984 9.50132 98.5146 9.50132C99.1308 9.50132 99.6108 9.32356 99.9545 8.96804C100.298 8.61252 100.47 8.1148 100.47 7.47486V3.77745H101.083V7.47486C101.083 8.28071 100.857 8.91175 100.403 9.368C99.95 9.82425 99.3204 10.0524 98.5146 10.0524C97.7087 10.0524 97.0777 9.82425 96.6215 9.368C96.1652 8.91175 95.9371 8.28071 95.9371 7.47486V3.77745H96.5504V7.47486ZM106.994 9.99905L105.652 7.97259C105.462 7.98444 105.317 7.99036 105.216 7.99036H103.51V9.99905H102.896V3.78634H105.216C105.992 3.78634 106.592 3.96558 107.016 4.32406C107.44 4.68255 107.651 5.19064 107.651 5.84835C107.651 6.36386 107.527 6.79344 107.278 7.13711C107.029 7.48078 106.674 7.72076 106.212 7.85704L107.705 9.99905H106.994ZM105.216 7.43931C105.809 7.43931 106.265 7.30451 106.585 7.0349C106.905 6.7653 107.065 6.37571 107.065 5.86613C107.065 5.3684 106.905 4.98918 106.585 4.72847C106.265 4.46775 105.809 4.33739 105.216 4.33739H103.51V7.43931H105.216ZM113.962 9.99905L113.224 8.34588H109.776L109.047 9.99905H108.389L111.189 3.78634H111.829L114.629 9.99905H113.962ZM110.016 7.79483H112.984L111.491 4.43516L110.016 7.79483Z"
                    fill="white"
                  />
                  <path
                    d="M39.9338 26.1573C39.6849 25.9144 39.3975 25.7248 39.0717 25.5885C38.7458 25.4522 38.408 25.3841 38.0584 25.3841C37.5785 25.3841 37.1385 25.4996 36.7386 25.7307C36.3386 25.9618 36.0216 26.2773 35.7875 26.6773C35.5535 27.0772 35.4365 27.5142 35.4365 27.9882C35.4365 28.4623 35.5535 28.8978 35.7875 29.2948C36.0216 29.6918 36.3386 30.0073 36.7386 30.2414C37.1385 30.4754 37.5785 30.5924 38.0584 30.5924C38.4021 30.5924 38.7369 30.5258 39.0628 30.3925C39.3887 30.2591 39.679 30.074 39.9338 29.837L40.3071 30.2369C39.999 30.5213 39.6464 30.7465 39.2494 30.9124C38.8524 31.0783 38.4465 31.1613 38.0318 31.1613C37.4451 31.1613 36.9059 31.0191 36.4141 30.7346C35.9223 30.4502 35.5327 30.0651 35.2454 29.5792C34.958 29.0933 34.8143 28.563 34.8143 27.9882C34.8143 27.4135 34.9595 26.8861 35.2498 26.4062C35.5402 25.9262 35.9327 25.5455 36.4275 25.2641C36.9222 24.9826 37.4629 24.8419 38.0495 24.8419C38.4702 24.8419 38.8761 24.9204 39.2672 25.0774C39.6583 25.2345 40.0019 25.4522 40.2982 25.7307L39.9338 26.1573ZM41.6492 24.8952H45.8088V25.4463H42.2624V27.6683H45.4355V28.2193H42.2624V30.5569H45.9243V31.1079H41.6492V24.8952ZM51.5237 31.1079L50.1817 29.0815C49.992 29.0933 49.8469 29.0992 49.7461 29.0992H48.0396V31.1079H47.4264V24.8952H49.7461C50.5224 24.8952 51.1223 25.0745 51.546 25.4329C51.9696 25.7914 52.1814 26.2995 52.1814 26.9572C52.1814 27.4727 52.057 27.9023 51.8082 28.246C51.5593 28.5897 51.2038 28.8296 50.7416 28.9659L52.2348 31.1079H51.5237ZM49.7461 28.5482C50.3387 28.5482 50.7949 28.4134 51.1149 28.1438C51.4349 27.8742 51.5948 27.4846 51.5948 26.975C51.5948 26.4773 51.4349 26.0981 51.1149 25.8374C50.7949 25.5766 50.3387 25.4463 49.7461 25.4463H48.0396V28.5482H49.7461ZM52.9725 24.8863H57.692V25.4463H55.6389V31.1079H55.0256V25.4463H52.9725V24.8863ZM58.7675 24.8952H59.3807V31.1079H58.7675V24.8952ZM61.3361 24.8952H65.229V25.4463H61.9494V27.8372H64.8735V28.3882H61.9494V31.1079H61.3361V24.8952ZM66.3134 24.8952H66.9266V31.1079H66.3134V24.8952ZM73.3971 26.1573C73.1482 25.9144 72.8609 25.7248 72.535 25.5885C72.2091 25.4522 71.8713 25.3841 71.5217 25.3841C71.0418 25.3841 70.6018 25.4996 70.2019 25.7307C69.8019 25.9618 69.4849 26.2773 69.2509 26.6773C69.0168 27.0772 68.8998 27.5142 68.8998 27.9882C68.8998 28.4623 69.0168 28.8978 69.2509 29.2948C69.4849 29.6918 69.8019 30.0073 70.2019 30.2414C70.6018 30.4754 71.0418 30.5924 71.5217 30.5924C71.8654 30.5924 72.2002 30.5258 72.5261 30.3925C72.852 30.2591 73.1423 30.074 73.3971 29.837L73.7704 30.2369C73.4623 30.5213 73.1097 30.7465 72.7127 30.9124C72.3157 31.0783 71.9098 31.1613 71.4951 31.1613C70.9085 31.1613 70.3693 31.0191 69.8775 30.7346C69.3857 30.4502 68.9961 30.0651 68.7087 29.5792C68.4213 29.0933 68.2776 28.563 68.2776 27.9882C68.2776 27.4135 68.4228 26.8861 68.7131 26.4062C69.0035 25.9262 69.396 25.5455 69.8908 25.2641C70.3856 24.9826 70.9262 24.8419 71.5128 24.8419C71.9335 24.8419 72.3394 24.9204 72.7305 25.0774C73.1216 25.2345 73.4652 25.4522 73.7615 25.7307L73.3971 26.1573ZM79.7254 31.1079L78.9877 29.4548H75.5391L74.8103 31.1079H74.1526L76.9523 24.8952H77.5922L80.392 31.1079H79.7254ZM75.7791 28.9037H78.7477L77.2545 25.544L75.7791 28.9037ZM83.9116 24.8952C84.5041 24.8952 85.0448 25.0315 85.5337 25.3041C86.0225 25.5766 86.4077 25.9514 86.6891 26.4284C86.9706 26.9054 87.1113 27.4313 87.1113 28.006C87.1113 28.5808 86.9706 29.1052 86.6891 29.5792C86.4077 30.0532 86.021 30.4265 85.5292 30.6991C85.0374 30.9717 84.4923 31.1079 83.8938 31.1079H81.4141V24.8952H83.9116ZM83.9294 30.5569C84.3975 30.5569 84.8271 30.4443 85.2182 30.2191C85.6092 29.994 85.9188 29.6873 86.1469 29.2992C86.3751 28.9111 86.4891 28.4801 86.4891 28.006C86.4891 27.532 86.3736 27.0995 86.1425 26.7084C85.9114 26.3173 85.5989 26.0092 85.2048 25.784C84.8108 25.5589 84.3767 25.4463 83.9027 25.4463H82.0274V30.5569H83.9294ZM90.9776 24.8419C91.5701 24.8419 92.1138 24.9826 92.6085 25.2641C93.1033 25.5455 93.4958 25.9262 93.7862 26.4062C94.0765 26.8861 94.2217 27.4135 94.2217 27.9882C94.2217 28.563 94.0765 29.0933 93.7862 29.5792C93.4958 30.0651 93.1033 30.4502 92.6085 30.7346C92.1138 31.0191 91.5701 31.1613 90.9776 31.1613C90.385 31.1613 89.8414 31.0191 89.3466 30.7346C88.8519 30.4502 88.4593 30.0651 88.169 29.5792C87.8786 29.0933 87.7335 28.563 87.7335 27.9882C87.7335 27.4135 87.8786 26.8861 88.169 26.4062C88.4593 25.9262 88.8519 25.5455 89.3466 25.2641C89.8414 24.9826 90.385 24.8419 90.9776 24.8419ZM90.9865 25.393C90.5124 25.393 90.074 25.5085 89.671 25.7396C89.2681 25.9707 88.9481 26.2847 88.7111 26.6817C88.4741 27.0787 88.3556 27.5142 88.3556 27.9882C88.3556 28.4623 88.4741 28.9007 88.7111 29.3037C88.9481 29.7066 89.2681 30.0251 89.671 30.2591C90.074 30.4932 90.5124 30.6102 90.9865 30.6102C91.4546 30.6102 91.8886 30.4932 92.2886 30.2591C92.6885 30.0251 93.007 29.7066 93.244 29.3037C93.481 28.9007 93.5995 28.4623 93.5995 27.9882C93.5995 27.5142 93.481 27.0787 93.244 26.6817C93.007 26.2847 92.6885 25.9707 92.2886 25.7396C91.8886 25.5085 91.4546 25.393 90.9865 25.393ZM101.465 25.9085C101.211 25.7485 100.932 25.6255 100.63 25.5396C100.328 25.4537 100.043 25.4107 99.7767 25.4107C99.3501 25.4107 99.0079 25.4952 98.7501 25.664C98.4924 25.8329 98.3635 26.0625 98.3635 26.3529C98.3635 26.6076 98.4346 26.815 98.5768 26.975C98.719 27.135 98.8938 27.2609 99.1012 27.3528C99.3086 27.4446 99.593 27.5468 99.9545 27.6594C100.375 27.7838 100.714 27.9068 100.972 28.0282C101.23 28.1497 101.449 28.326 101.63 28.5571C101.811 28.7882 101.901 29.0933 101.901 29.4725C101.901 29.8044 101.808 30.0977 101.621 30.3525C101.434 30.6072 101.172 30.8043 100.834 30.9435C100.497 31.0828 100.109 31.1524 99.67 31.1524C99.2375 31.1524 98.8153 31.0665 98.4035 30.8946C97.9917 30.7228 97.6376 30.4947 97.3414 30.2102L97.6258 29.7036C97.9043 29.9762 98.2272 30.1895 98.5946 30.3436C98.962 30.4976 99.3234 30.5747 99.6789 30.5747C100.153 30.5747 100.529 30.4784 100.808 30.2858C101.086 30.0932 101.225 29.834 101.225 29.5081C101.225 29.2474 101.154 29.0341 101.012 28.8682C100.87 28.7022 100.695 28.5749 100.488 28.486C100.28 28.3971 99.99 28.2934 99.6167 28.1749C99.196 28.0445 98.8583 27.9216 98.6035 27.806C98.3487 27.6905 98.1324 27.5187 97.9547 27.2905C97.7769 27.0624 97.688 26.7647 97.688 26.3973C97.688 26.0833 97.7769 25.8077 97.9547 25.5707C98.1324 25.3337 98.3813 25.1515 98.7012 25.0241C99.0212 24.8967 99.3915 24.833 99.8122 24.833C100.15 24.833 100.489 24.8834 100.83 24.9841C101.171 25.0848 101.471 25.2182 101.732 25.3841L101.465 25.9085ZM106.869 25.9085C106.615 25.7485 106.336 25.6255 106.034 25.5396C105.732 25.4537 105.447 25.4107 105.181 25.4107C104.754 25.4107 104.412 25.4952 104.154 25.664C103.896 25.8329 103.767 26.0625 103.767 26.3529C103.767 26.6076 103.839 26.815 103.981 26.975C104.123 27.135 104.298 27.2609 104.505 27.3528C104.712 27.4446 104.997 27.5468 105.358 27.6594C105.779 27.7838 106.118 27.9068 106.376 28.0282C106.634 28.1497 106.853 28.326 107.034 28.5571C107.214 28.7882 107.305 29.0933 107.305 29.4725C107.305 29.8044 107.212 30.0977 107.025 30.3525C106.838 30.6072 106.576 30.8043 106.238 30.9435C105.901 31.0828 105.512 31.1524 105.074 31.1524C104.641 31.1524 104.219 31.0665 103.807 30.8946C103.396 30.7228 103.042 30.4947 102.745 30.2102L103.03 29.7036C103.308 29.9762 103.631 30.1895 103.998 30.3436C104.366 30.4976 104.727 30.5747 105.083 30.5747C105.557 30.5747 105.933 30.4784 106.212 30.2858C106.49 30.0932 106.629 29.834 106.629 29.5081C106.629 29.2474 106.558 29.0341 106.416 28.8682C106.274 28.7022 106.099 28.5749 105.892 28.486C105.684 28.3971 105.394 28.2934 105.021 28.1749C104.6 28.0445 104.262 27.9216 104.007 27.806C103.753 27.6905 103.536 27.5187 103.359 27.2905C103.181 27.0624 103.092 26.7647 103.092 26.3973C103.092 26.0833 103.181 25.8077 103.359 25.5707C103.536 25.3337 103.785 25.1515 104.105 25.0241C104.425 24.8967 104.795 24.833 105.216 24.833C105.554 24.833 105.893 24.8834 106.234 24.9841C106.575 25.0848 106.875 25.2182 107.136 25.3841L106.869 25.9085ZM108.825 24.8952H109.438V30.5569H112.175V31.1079H108.825V24.8952Z"
                    fill="white"
                  />
                  <path
                    d="M40.6959 15.8317C40.2811 15.5873 39.8256 15.3799 39.3294 15.2095C38.8331 15.0392 38.4258 14.954 38.1073 14.954C37.9073 14.954 37.7499 14.9929 37.6351 15.0707C37.5203 15.1484 37.4629 15.2614 37.4629 15.4095C37.4629 15.6169 37.574 15.778 37.7962 15.8928C38.0184 16.0076 38.3702 16.1317 38.8517 16.265C39.3998 16.4205 39.8516 16.5779 40.2071 16.7372C40.5626 16.8964 40.8718 17.139 41.1348 17.4649C41.3977 17.7908 41.5292 18.2203 41.5292 18.7536C41.5292 19.2943 41.3866 19.7517 41.1014 20.1257C40.8163 20.4997 40.4311 20.7793 39.946 20.9645C39.4609 21.1497 38.9183 21.2423 38.3184 21.2423C37.6518 21.2423 36.9833 21.1293 36.313 20.9034C35.6427 20.6775 35.0632 20.3683 34.5743 19.9757L35.4409 18.2203C35.8334 18.561 36.313 18.848 36.8796 19.0814C37.4462 19.3147 37.9332 19.4313 38.3406 19.4313C38.5924 19.4313 38.7887 19.3832 38.9294 19.2869C39.0702 19.1906 39.1405 19.0536 39.1405 18.8758C39.1405 18.661 39.0257 18.4962 38.7961 18.3814C38.5665 18.2666 38.211 18.1463 37.7295 18.0204C37.1889 17.8796 36.7408 17.7333 36.3852 17.5815C36.0297 17.4297 35.7223 17.1945 35.4631 16.876C35.2039 16.5575 35.0743 16.1391 35.0743 15.6206C35.0743 15.1169 35.2076 14.6781 35.4742 14.3041C35.7409 13.93 36.1167 13.643 36.6019 13.443C37.087 13.2431 37.6518 13.1431 38.2962 13.1431C38.8813 13.1431 39.4627 13.2264 40.0404 13.393C40.6182 13.5597 41.1218 13.78 41.5514 14.0541L40.6959 15.8317ZM42.3735 13.3208H44.6844V21.1089H42.3735V13.3208ZM45.4066 13.3208H52.2503V15.1651H49.9839V21.1089H47.6619V15.1651H45.4066V13.3208ZM52.9725 13.3208H59.3385V15.0984H55.2833V16.3205H58.9608V18.0981H55.2833V19.3313H59.4496V21.1089H52.9725V13.3208ZM66.4378 13.3208C67.4451 13.3208 68.2246 13.5615 68.7764 14.043C69.3282 14.5244 69.6041 15.2058 69.6041 16.0872C69.6041 17.0131 69.3282 17.7315 68.7764 18.2426C68.2246 18.7536 67.4451 19.0091 66.4378 19.0091L65.2157 19.0203V21.1089H62.9048V13.3208H66.4378ZM66.3267 17.2315C66.6748 17.2315 66.9433 17.139 67.1322 16.9538C67.321 16.7686 67.4155 16.502 67.4155 16.1539C67.4155 15.8132 67.321 15.5521 67.1322 15.3706C66.9433 15.1892 66.6748 15.0984 66.3267 15.0984H65.2157V17.2315H66.3267ZM75.0591 21.1089L74.0259 19.0091H72.8038V21.1089H70.4929V13.3208H74.1259C75.1702 13.3208 75.9794 13.5615 76.5534 14.043C77.1275 14.5244 77.4145 15.2058 77.4145 16.0872C77.4145 16.6575 77.3015 17.1519 77.0756 17.5704C76.8497 17.9889 76.5257 18.3203 76.1035 18.5647L77.6811 21.1089H75.0591ZM72.8038 17.2315H74.1259C74.474 17.2315 74.7425 17.139 74.9314 16.9538C75.1203 16.7686 75.2147 16.502 75.2147 16.1539C75.2147 15.8132 75.1203 15.5521 74.9314 15.3706C74.7425 15.1892 74.474 15.0984 74.1259 15.0984H72.8038V17.2315ZM82.3473 13.1764C83.1472 13.1764 83.8712 13.3505 84.5193 13.6986C85.1674 14.0467 85.6747 14.5263 86.0414 15.1373C86.408 15.7484 86.5913 16.4353 86.5913 17.1982C86.5913 17.9685 86.408 18.6629 86.0414 19.2813C85.6747 19.8998 85.1674 20.3849 84.5193 20.7368C83.8712 21.0886 83.1472 21.2645 82.3473 21.2645C81.54 21.2645 80.8141 21.0886 80.1698 20.7368C79.5254 20.3849 79.0199 19.8998 78.6532 19.2813C78.2866 18.6629 78.1033 17.9685 78.1033 17.1982C78.1033 16.4353 78.2866 15.7484 78.6532 15.1373C79.0199 14.5263 79.5254 14.0467 80.1698 13.6986C80.8141 13.3505 81.54 13.1764 82.3473 13.1764ZM82.3806 15.0984C82.0399 15.0984 81.7233 15.191 81.4307 15.3762C81.1382 15.5613 80.9049 15.815 80.7308 16.1372C80.5567 16.4594 80.4697 16.8168 80.4697 17.2093C80.4697 17.6019 80.5567 17.9611 80.7308 18.287C80.9049 18.6129 81.1382 18.8703 81.4307 19.0591C81.7233 19.248 82.0399 19.3424 82.3806 19.3424C82.7139 19.3424 83.0232 19.248 83.3083 19.0591C83.5935 18.8703 83.8175 18.6147 83.9805 18.2926C84.1434 17.9704 84.2249 17.6093 84.2249 17.2093C84.2249 16.8168 84.1434 16.4594 83.9805 16.1372C83.8175 15.815 83.5953 15.5613 83.3139 15.3762C83.0324 15.191 82.7213 15.0984 82.3806 15.0984ZM86.5691 13.3208H93.4129V15.1651H91.1464V21.1089H88.8244V15.1651H86.5691V13.3208ZM94.135 13.3208H100.501V15.0984H96.4459V16.3205H100.123V18.0981H96.4459V19.3313H100.612V21.1089H94.135V13.3208ZM106.812 17.076H108.8V20.2424C108.378 20.5386 107.856 20.783 107.234 20.9756C106.612 21.1682 106.023 21.2645 105.467 21.2645C104.675 21.2645 103.96 21.0886 103.323 20.7368C102.686 20.3849 102.186 19.9017 101.823 19.2869C101.46 18.6721 101.279 17.9796 101.279 17.2093C101.279 16.4464 101.466 15.7576 101.84 15.1429C102.214 14.5281 102.732 14.0467 103.395 13.6986C104.058 13.3505 104.801 13.1764 105.623 13.1764C106.215 13.1764 106.808 13.2838 107.4 13.4986C107.993 13.7134 108.497 14.0059 108.911 14.3763L107.6 15.9539C107.334 15.6947 107.021 15.4873 106.662 15.3317C106.302 15.1762 105.952 15.0984 105.612 15.0984C105.241 15.0984 104.906 15.191 104.606 15.3762C104.306 15.5613 104.071 15.815 103.901 16.1372C103.73 16.4594 103.645 16.8168 103.645 17.2093C103.645 17.6093 103.732 17.9722 103.906 18.2981C104.08 18.624 104.319 18.8795 104.623 19.0647C104.927 19.2499 105.264 19.3424 105.634 19.3424C105.967 19.3424 106.36 19.2351 106.812 19.0203V17.076ZM109.945 13.3208H112.255V21.1089H109.945V13.3208ZM116.977 13.3208C117.807 13.3208 118.538 13.4819 119.171 13.8041C119.805 14.1263 120.295 14.5818 120.643 15.1706C120.992 15.7595 121.166 16.439 121.166 17.2093C121.166 17.9796 120.988 18.661 120.632 19.2536C120.277 19.8461 119.777 20.3035 119.133 20.6257C118.488 20.9478 117.744 21.1089 116.899 21.1089H113.566V13.3208H116.977ZM117.044 19.298C117.57 19.298 117.996 19.1091 118.321 18.7314C118.647 18.3537 118.81 17.8537 118.81 17.2315C118.81 16.6094 118.636 16.1057 118.288 15.7206C117.94 15.3354 117.488 15.1429 116.933 15.1429H115.877V19.298H117.044ZM125.765 13.1764C126.565 13.1764 127.289 13.3505 127.937 13.6986C128.585 14.0467 129.093 14.5263 129.459 15.1373C129.826 15.7484 130.009 16.4353 130.009 17.1982C130.009 17.9685 129.826 18.6629 129.459 19.2813C129.093 19.8998 128.585 20.3849 127.937 20.7368C127.289 21.0886 126.565 21.2645 125.765 21.2645C124.958 21.2645 124.232 21.0886 123.588 20.7368C122.943 20.3849 122.438 19.8998 122.071 19.2813C121.704 18.6629 121.521 17.9685 121.521 17.1982C121.521 16.4353 121.704 15.7484 122.071 15.1373C122.438 14.5263 122.943 14.0467 123.588 13.6986C124.232 13.3505 124.958 13.1764 125.765 13.1764ZM125.799 15.0984C125.458 15.0984 125.141 15.191 124.849 15.3762C124.556 15.5613 124.323 15.815 124.149 16.1372C123.975 16.4594 123.888 16.8168 123.888 17.2093C123.888 17.6019 123.975 17.9611 124.149 18.287C124.323 18.6129 124.556 18.8703 124.849 19.0591C125.141 19.248 125.458 19.3424 125.799 19.3424C126.132 19.3424 126.441 19.248 126.726 19.0591C127.011 18.8703 127.235 18.6147 127.398 18.2926C127.561 17.9704 127.643 17.6093 127.643 17.2093C127.643 16.8168 127.561 16.4594 127.398 16.1372C127.235 15.815 127.013 15.5613 126.732 15.3762C126.45 15.191 126.139 15.0984 125.799 15.0984Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_4501">
                    <rect width="129.987" height="33.33" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <div className="flex flex-col pl-8 my-2 gap-2">
              <Link href="/Terms">
                <span className="hover:text-gray-300">Termos de Uso</span>
              </Link>
              <Link href="/Cancel">
                <span className="hover:text-gray-300">
                  Política de Cancelamento e Reembolso
                </span>
              </Link>
              <Link href="/Privacy">
                <span className="hover:text-gray-300">
                  Política de Privacidade
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Image src={borderFooter} alt="border" width={2000} height={10}></Image>
      <div className="w-full pt-8 flex justify-around items-center">
        <div className="flex w-full items-center flex-col">
          <span className="text-sm">
            &copy; 2023 Caça Palavras Didáticos. Todos os direitos reservados.
          </span>
        </div>
        <div className="flex items-center w-full flex-col">
          <div className="flex items-start flex-row gap-4 ">
            <Link href="https://www.facebook.com/groups/3122508304471779/?ref=share" className="mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M16 8.04789C16.0003 6.51897 15.5625 5.02198 14.7385 3.73417C13.9144 2.44635 12.7385 1.42165 11.3501 0.781392C9.96173 0.141135 8.41893 -0.0878599 6.90442 0.12152C5.38991 0.330901 3.96712 0.969887 2.80451 1.96282C1.6419 2.95575 0.788165 4.26104 0.344396 5.72414C-0.0993733 7.18723 -0.114591 8.74685 0.300544 10.2183C0.71568 11.6898 1.54378 13.0115 2.68679 14.0269C3.82981 15.0424 5.23986 15.709 6.75 15.9479V10.3599H4.719V8.04789H6.75V6.28489C6.70627 5.87334 6.7536 5.4572 6.88863 5.06598C7.02366 4.67476 7.24309 4.31803 7.53136 4.02107C7.81964 3.72411 8.1697 3.49419 8.55674 3.34762C8.94379 3.20104 9.35833 3.14139 9.771 3.17289C10.371 3.18077 10.9696 3.23291 11.562 3.32889V5.29989H10.554C10.3823 5.27743 10.2077 5.29388 10.0432 5.348C9.87874 5.40213 9.72853 5.49255 9.6037 5.61258C9.47887 5.7326 9.38263 5.87916 9.3221 6.0414C9.26157 6.20365 9.23829 6.37743 9.254 6.54989V8.04989H11.473L11.118 10.3619H9.25V15.9529C11.1322 15.6551 12.8464 14.6953 14.0838 13.2461C15.3213 11.7969 16.0008 9.95353 16 8.04789Z"
                  fill="#BAC3CA"
                />
              </svg>
            </Link>
            {/* <Link href="/twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 14"
                fill="none"
              >
                <path
                  d="M16 2C15.4 2.3 14.8 2.4 14.1 2.5C14.8 2.1 15.3 1.5 15.5 0.7C14.9 1.1 14.2 1.3 13.4 1.5C12.8 0.9 11.9 0.5 11 0.5C9.3 0.5 7.8 2 7.8 3.8C7.8 4.1 7.8 4.3 7.9 4.5C5.2 4.4 2.7 3.1 1.1 1.1C0.8 1.6 0.7 2.1 0.7 2.8C0.7 3.9 1.3 4.9 2.2 5.5C1.7 5.5 1.2 5.3 0.7 5.1C0.7 6.7 1.8 8 3.3 8.3C3 8.4 2.7 8.4 2.4 8.4C2.2 8.4 2 8.4 1.8 8.3C2.2 9.6 3.4 10.6 4.9 10.6C3.8 11.5 2.4 12 0.8 12C0.5 12 0.3 12 0 12C1.5 12.9 3.2 13.5 5 13.5C11 13.5 14.3 8.5 14.3 4.2C14.3 4.1 14.3 3.9 14.3 3.8C15 3.3 15.6 2.7 16 2Z"
                  fill="#BAC3CA"
                />
              </svg>
            </Link> */}
            <Link href="https://www.instagram.com/cacapalavrasdidaticos/" className="ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M12.145 4.85189C12.6752 4.85189 13.105 4.42208 13.105 3.89188C13.105 3.36169 12.6752 2.93188 12.145 2.93188C11.6148 2.93188 11.185 3.36169 11.185 3.89188C11.185 4.42208 11.6148 4.85189 12.145 4.85189Z"
                  fill="#BAC3CA"
                />
                <path
                  d="M8 12C5.794 12 4 10.206 4 8C4 5.794 5.794 4 8 4C10.206 4 12 5.794 12 8C12 10.206 10.206 12 8 12ZM8 6C6.897 6 6 6.897 6 8C6 9.103 6.897 10 8 10C9.103 10 10 9.103 10 8C10 6.897 9.103 6 8 6Z"
                  fill="#BAC3CA"
                />
                <path
                  d="M12 16H4C1.944 16 0 14.056 0 12V4C0 1.944 1.944 0 4 0H12C14.056 0 16 1.944 16 4V12C16 14.056 14.056 16 12 16ZM4 2C3.065 2 2 3.065 2 4V12C2 12.953 3.047 14 4 14H12C12.935 14 14 12.935 14 12V4C14 3.065 12.935 2 12 2H4Z"
                  fill="#BAC3CA"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
