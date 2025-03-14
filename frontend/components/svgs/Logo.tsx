type LogoProps = React.SVGProps<SVGSVGElement>;

export const Logo = ({ color = "currentColor", ...props }: LogoProps) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 175 105"
    enableBackground="new 0 0 175 105"
    xmlSpace="preserve"
    className={`fill-current text-${color}`}
    {...props}
  >
    <path
      fill="currentColor"
      opacity={1}
      stroke="none"
      d=" M1.000000,84.000000  C1.000000,76.312424 1.000000,68.624847 1.336145,60.169617  C4.103681,59.775894 7.122757,61.198692 8.813761,60.251213  C10.808496,59.133560 12.920055,55.807014 12.660499,53.727814  C12.370695,51.406319 9.842186,48.757732 7.590651,47.493172  C5.992715,46.595695 3.238254,47.757401 1.000000,48.000000  C1.000000,40.312424 1.000000,32.624847 1.468657,24.468636  C59.576538,24.000000 117.215759,24.000000 175.000000,24.000000  C175.000000,28.126120 174.870056,31.613293 175.035690,35.086372  C175.209518,38.731289 175.666656,42.362694 176.000000,46.000000  C176.000000,46.444447 176.000000,46.888889 175.595367,47.666557  C173.153732,47.796066 170.973633,47.032127 169.110321,47.508183  C165.508774,48.428337 163.148148,52.841602 164.019501,55.958813  C165.036270,59.596245 169.549194,61.541016 174.677094,60.656750  C174.677094,68.374794 174.677094,76.119865 174.677094,84.000000  C116.569527,84.000000 58.784763,84.000000 1.000000,84.000000  M76.999977,73.475922  C73.485855,58.005634 75.018005,42.574890 78.307449,27.313194  C73.629303,26.806749 69.908829,26.131855 66.176048,26.054995  C57.698853,25.880442 49.214977,25.935612 40.735001,26.018442  C32.553963,26.098352 32.458870,27.018410 32.125134,34.639721  C31.638187,45.759827 32.000004,56.917091 32.000000,68.058517  C32.000000,72.313446 32.000000,76.568375 32.000000,80.769073  C47.673214,80.769073 62.746761,80.769073 78.347321,80.769073  C77.853271,78.418053 77.428055,76.394623 76.999977,73.475922  M125.999992,55.407291  C127.239777,63.947372 128.479568,72.487457 129.694290,80.854919  C132.653519,80.854919 134.602554,80.854919 136.153824,80.854919  C136.153824,62.816444 136.153824,44.935200 136.153824,27.145576  C133.665848,27.145576 132.028214,27.145576 129.346573,27.145576  C128.230133,36.255676 127.115067,45.354527 125.999992,55.407291  M110.001991,61.163521  C110.924416,65.909927 112.287056,70.622284 112.657387,75.411385  C113.116112,81.343620 116.280754,81.797829 121.293701,80.481056  C115.269417,62.908455 116.793999,45.077534 120.351189,27.384943  C115.863922,26.496349 113.941711,26.998728 112.769791,31.524096  C110.308006,41.030296 109.863037,50.555443 110.001991,61.163521  M102.949036,67.614815  C103.071083,57.177113 103.065338,46.735371 103.394676,36.304214  C103.490875,33.257168 104.541565,30.240257 105.456635,25.717484  C102.018120,27.118656 98.603043,27.570993 98.302681,28.790497  C96.760956,35.049923 95.498306,41.476208 95.123238,47.901699  C94.570442,57.371803 95.615128,66.710770 97.637962,76.122650  C98.854652,81.783630 101.096931,81.284096 105.268059,80.587997  C104.482063,76.411812 103.739067,72.464111 102.949036,67.614815  M87.611511,80.999832  C88.726860,80.903732 89.842209,80.807640 91.163956,80.693764  C86.412537,62.763931 86.938873,45.052940 91.054016,27.195759  C87.939621,26.948814 84.739052,25.999256 84.092903,29.931110  C82.858025,37.445450 81.169357,45.028881 81.220253,52.573170  C81.279083,61.293690 82.942719,70.012207 84.122673,78.702660  C84.240479,79.570366 85.834511,80.237633 87.611511,80.999832  z"
      data-index={0}
      style={{
        opacity: 1,
      }}
    />
    <path
      fill="currentColor"
      opacity={1}
      stroke="none"
      d=" M1.000000,20.000000  C1.000000,13.681282 1.000000,7.362565 1.000000,1.000000  C57.687553,1.000000 114.375122,1.000000 171.628632,1.363652  C173.011536,2.550803 174.480667,3.331837 174.537506,4.204825  C174.859070,9.143538 174.960831,14.108150 174.800049,19.052971  C174.778351,19.720234 172.880539,20.821247 171.810562,20.872805  C167.503403,21.080351 163.178864,21.022488 158.863098,20.939856  C143.979767,20.654884 129.098526,20.172390 114.214264,20.060503  C106.303085,20.001036 98.385826,20.814495 90.473969,20.769390  C73.456902,20.672379 56.442333,20.196798 39.425243,20.025492  C26.618040,19.896566 13.808499,20.000000 1.000000,20.000000  M95.980392,8.957237  C95.236092,7.727275 94.668541,6.334106 93.712975,5.299214  C91.253098,2.635107 85.911362,2.151915 83.483353,4.203394  C80.297928,6.894838 79.464546,11.655184 81.400970,14.945384  C83.349091,18.255455 86.330391,20.097944 89.797585,18.835642  C93.620140,17.443958 96.603882,14.611205 95.980392,8.957237  M17.956261,6.432884  C15.051895,10.225642 15.333035,14.319585 18.694485,17.182859  C21.710396,19.751804 26.772547,19.746571 29.321308,17.171871  C32.870922,13.586136 32.994045,9.637044 29.542053,6.061633  C25.884233,2.273036 21.968561,3.233199 17.956261,6.432884  M157.542664,14.969922  C159.789795,9.957031 158.552048,6.430770 153.673355,3.946602  C150.276642,2.217042 146.375290,3.769812 144.045120,7.778722  C142.048538,11.213732 142.973038,15.435747 146.213943,17.683258  C149.882751,20.227510 154.140015,19.404383 157.542664,14.969922  M103.003487,6.731865  C103.003487,10.453835 103.003487,14.175807 103.003487,17.709179  C105.690598,17.709179 107.746201,17.709179 109.763069,17.709179  C109.763069,13.368826 109.763069,9.323385 109.763069,4.675021  C107.321297,5.079443 105.185089,5.433257 103.003487,6.731865  M58.000233,7.687382  C58.000233,11.094710 58.000233,14.502039 58.000233,17.882214  C65.860344,18.119186 66.208908,17.388479 64.410454,4.318485  C62.207226,5.149495 60.105350,5.942277 58.000233,7.687382  M124.000000,11.494746  C124.000000,13.592290 124.000000,15.689834 124.000000,17.751944  C131.542709,18.228354 132.819901,15.450271 130.373138,5.323011  C128.253983,5.323011 126.203293,5.323011 124.000000,5.323011  C124.000000,7.275985 124.000000,8.906927 124.000000,11.494746  M44.000000,9.544353  C43.934963,8.087414 43.869923,6.630476 43.808292,5.249937  C39.271557,4.396379 35.949303,4.959569 37.066799,10.453862  C37.615139,13.149832 34.515991,17.931631 40.492855,17.940121  C46.469780,17.948608 43.074265,13.101821 44.000000,9.544353  z"
      data-index={1}
      style={{
        opacity: 1,
      }}
    />
    <path
      fill="currentColor"
      opacity={1}
      stroke="none"
      d=" M19.000000,106.000000  C13.074267,106.000000 7.148534,106.000000 1.000000,106.000000  C1.000000,100.315063 1.000000,94.627235 1.468657,88.469711  C57.898026,88.000000 113.858742,87.989349 169.819397,88.042168  C171.879898,88.044113 173.939819,88.666672 176.000000,89.000000  C176.000000,94.600502 176.000000,100.201012 176.000000,106.000000  C169.313553,106.000000 162.625702,106.000000 155.180756,105.704330  C155.178864,104.541977 155.940948,103.681183 156.688049,102.807579  C159.895035,99.057549 159.847809,95.169258 156.563431,92.084908  C153.554474,89.259209 148.634872,89.207687 145.553482,91.969589  C142.227280,94.950928 142.132919,98.942398 145.173523,102.708740  C145.949966,103.670502 146.399994,104.895790 147.000000,106.000000  C128.979111,106.000000 110.958214,106.000000 92.470276,105.628883  C93.317932,102.109673 95.754868,98.888710 95.556847,95.838829  C95.422523,93.770020 91.888863,91.196136 89.342857,90.171249  C84.973747,88.412476 82.155518,92.095718 80.664337,95.211525  C79.790154,97.038132 81.493576,100.175095 82.233978,102.664169  C82.585709,103.846596 83.396935,104.892342 84.000000,106.000000  C65.979103,106.000000 47.958210,106.000000 29.178413,105.693604  C28.608488,105.117134 28.779057,104.831741 28.989162,104.579254  C32.909321,99.868599 33.065418,96.876755 29.624081,93.108963  C26.767164,89.981026 23.624264,88.825081 19.884132,91.620155  C15.467582,94.920731 15.048738,98.273994 18.267145,103.719650  C18.663322,104.389999 18.762949,105.235611 19.000000,106.000000  M109.999901,94.829102  C110.343697,91.712952 108.626556,90.311653 105.941826,91.165283  C104.676071,91.567726 103.357857,93.615349 103.129250,95.083466  C102.687042,97.923294 103.000084,100.880730 103.000084,103.771179  C105.576973,103.771179 107.629768,103.771179 110.000000,103.771179  C110.000000,100.953415 110.000000,98.353027 109.999901,94.829102  M126.564186,103.999687  C127.989807,103.919434 129.415436,103.839180 130.998611,103.750053  C130.998611,100.239311 131.166916,97.075211 130.902542,93.947685  C130.816101,92.925011 129.750412,91.381325 128.872116,91.172775  C127.597252,90.870049 125.802231,91.164795 124.740738,91.922028  C123.058266,93.122231 123.914536,102.091629 126.564186,103.999687  M38.843441,103.965485  C40.439949,103.965485 42.036457,103.965485 43.997910,103.965485  C43.997910,100.396019 44.249371,97.110313 43.856670,93.903481  C43.725521,92.832481 42.009228,91.283783 40.905399,91.183105  C39.677975,91.071159 37.222515,92.341248 37.208805,93.046722  C37.140942,96.538040 37.703594,100.041611 38.843441,103.965485  M60.413239,103.999580  C65.693481,103.553131 65.918739,102.919746 64.579109,91.804665  C62.658512,91.804665 60.689377,91.804665 58.720242,91.804665  C58.979458,95.868027 59.238674,99.931396 60.413239,103.999580  z"
      data-index={2}
      style={{
        opacity: 1,
        visibility: "visible",
      }}
    />
    <path
      fill="#FFFFFF"
      opacity={1}
      stroke="none"
      d=" M1.000000,20.399996  C13.808499,20.000000 26.618040,19.896566 39.425243,20.025492  C56.442333,20.196798 73.456902,20.672379 90.473969,20.769390  C98.385826,20.814495 106.303085,20.001036 114.214264,20.060503  C129.098526,20.172390 143.979767,20.654884 158.863098,20.939856  C163.178864,21.022488 167.503403,21.080351 171.810562,20.872805  C172.880539,20.821247 174.778351,19.720234 174.800049,19.052971  C174.960831,14.108150 174.859070,9.143538 174.537506,4.204825  C174.480667,3.331837 173.011536,2.550803 172.097290,1.363652  C173.321304,1.000000 174.642624,1.000000 176.000000,1.000000  C176.000000,15.687545 176.000000,30.375114 176.000000,45.531342  C175.666656,42.362694 175.209518,38.731289 175.035690,35.086372  C174.870056,31.613293 175.000000,28.126120 175.000000,24.000000  C117.215759,24.000000 59.576538,24.000000 1.468657,24.000000  C1.000000,22.933331 1.000000,21.866661 1.000000,20.399996  z"
      data-index={4}
      style={{
        opacity: 1,
        visibility: "hidden",
      }}
    />
    <path
      fill="#FFFFFF"
      opacity={1}
      stroke="none"
      d=" M19.454109,106.000000  C18.762949,105.235611 18.663322,104.389999 18.267145,103.719650  C15.048738,98.273994 15.467582,94.920731 19.884132,91.620155  C23.624264,88.825081 26.767164,89.981026 29.624081,93.108963  C33.065418,96.876755 32.909321,99.868599 28.989162,104.579254  C28.779057,104.831741 28.608488,105.117134 28.709755,105.693604  C25.969406,106.000000 22.938814,106.000000 19.454109,106.000000  z"
      data-index={6}
      style={{
        opacity: 1,
        visibility: "hidden",
      }}
    />
    <path
      fill="#FFFFFF"
      opacity={1}
      stroke="none"
      d=" M1.000000,48.460636  C3.238254,47.757401 5.992715,46.595695 7.590651,47.493172  C9.842186,48.757732 12.370695,51.406319 12.660499,53.727814  C12.920055,55.807014 10.808496,59.133560 8.813761,60.251213  C7.122757,61.198692 4.103681,59.775894 1.336145,59.700981  C1.000000,56.307091 1.000000,52.614182 1.000000,48.460636  z"
      data-index={8}
      style={{
        opacity: 1,
        visibility: "hidden",
      }}
    />
    <path
      fill="#FFFFFF"
      opacity={1}
      stroke="none"
      d=" M126.000000,54.930336  C127.115067,45.354527 128.230133,36.255676 129.346573,27.145576  C132.028214,27.145576 133.665848,27.145576 136.153824,27.145576  C136.153824,44.935200 136.153824,62.816444 136.153824,80.854919  C134.602554,80.854919 132.653519,80.854919 129.694290,80.854919  C128.479568,72.487457 127.239777,63.947372 126.000000,54.930336  z"
      data-index={10}
      style={{
        opacity: 1,
        visibility: "hidden",
      }}
    />
    <path
      fill="#FFFFFF"
      opacity={1}
      stroke="none"
      d=" M102.972557,68.065613  C103.739067,72.464111 104.482063,76.411812 105.268059,80.587997  C101.096931,81.284096 98.854652,81.783630 97.637962,76.122650  C95.615128,66.710770 94.570442,57.371803 95.123238,47.901699  C95.498306,41.476208 96.760956,35.049923 98.302681,28.790497  C98.603043,27.570993 102.018120,27.118656 105.456635,25.717484  C104.541565,30.240257 103.490875,33.257168 103.394676,36.304214  C103.065338,46.735371 103.071083,57.177113 102.972557,68.065613  z"
      data-index={12}
      style={{
        opacity: 1,
        visibility: "hidden",
      }}
    />
    <path
      fill="#FFFFFF"
      opacity={1}
      stroke="none"
      d=" M95.989449,9.363129  C96.603882,14.611205 93.620140,17.443958 89.797585,18.835642  C86.330391,20.097944 83.349091,18.255455 81.400970,14.945384  C79.464546,11.655184 80.297928,6.894838 83.483353,4.203394  C85.911362,2.151915 91.253098,2.635107 93.712975,5.299214  C94.668541,6.334106 95.236092,7.727275 95.989449,9.363129  z"
      data-index={14}
      style={{
        opacity: 1,
        visibility: "hidden",
      }}
    />
    <path
      fill="#FFFFFF"
      opacity={1}
      stroke="none"
      d=" M157.290009,15.280251  C154.140015,19.404383 149.882751,20.227510 146.213943,17.683258  C142.973038,15.435747 142.048538,11.213732 144.045120,7.778722  C146.375290,3.769812 150.276642,2.217042 153.673355,3.946602  C158.552048,6.430770 159.789795,9.957031 157.290009,15.280251  z"
      data-index={16}
      style={{
        opacity: 1,
        visibility: "hidden",
      }}
    />
    <path
      fill="#FFFFFF"
      opacity={1}
      stroke="none"
      d=" M58.001854,7.211221  C60.105350,5.942277 62.207226,5.149495 64.410454,4.318485  C66.208908,17.388479 65.860344,18.119186 58.000233,17.882214  C58.000233,14.502039 58.000233,11.094710 58.001854,7.211221  z"
      data-index={18}
      style={{
        opacity: 1,
        visibility: "hidden",
      }}
    />
    <path
      fill="#FFFFFF"
      opacity={1}
      stroke="none"
      d=" M44.000000,10.013504  C43.074265,13.101821 46.469780,17.948608 40.492855,17.940121  C34.515991,17.931631 37.615139,13.149832 37.066799,10.453862  C35.949303,4.959569 39.271557,4.396379 43.808292,5.249937  C43.869923,6.630476 43.934963,8.087414 44.000000,10.013504  z"
      data-index={20}
      style={{
        opacity: 1,
        visibility: "hidden",
      }}
    />
    <path
      fill="#FFFFFF"
      opacity={1}
      stroke="none"
      d=" M126.092361,103.997650  C123.914536,102.091629 123.058266,93.122231 124.740738,91.922028  C125.802231,91.164795 127.597252,90.870049 128.872116,91.172775  C129.750412,91.381325 130.816101,92.925011 130.902542,93.947685  C131.166916,97.075211 130.998611,100.239311 130.998611,103.750053  C129.415436,103.839180 127.989807,103.919434 126.092361,103.997650  z"
      data-index={22}
      style={{
        opacity: 1,
        visibility: "hidden",
      }}
    />
    <path
      fill="#FFFFFF"
      opacity={1}
      stroke="none"
      d=" M59.955566,103.997169  C59.238674,99.931396 58.979458,95.868027 58.720242,91.804665  C60.689377,91.804665 62.658512,91.804665 64.579109,91.804665  C65.918739,102.919746 65.693481,103.553131 59.955566,103.997169  z"
      data-index={24}
      style={{
        opacity: 1,
        visibility: "hidden",
      }}
    />
  </svg>
);
export default Logo;
