export enum Messages {
  /* ------ GENERIC MESSAGES ------ */
  MIN_LENGTH = 'minLength',
  MAX_LENGTH = 'maxLength',
  MIN_VALUE = 'minValue',
  MAX_VALUE = 'maxValue',
  REQUIRED = 'required',
  INVALID_TYPE = 'invalidType',
  INVALID_REQUEST = 'invalidRequest',
  INVALID_UUID = 'invalidUuid',
  APPLICATION_ERROR = 'applicationError',
  INVALID_QUERY = 'invalidQuery',
  RATE_LIMIT_EXCEEDED = 'rateLimitExceeded',
  USER_HAS_NO_IMAGE = 'userHasNoImage',
  INVALID_BASE64_FORMAT = 'invalidBase64Format',

  // /* ------ AUTHENTICATION ------ */
  // INVALID_EMAIL = 'invalidEmail',
  // INVALID_PASSWORD = 'invalidPassword',
  // INVALID_LOGIN = 'invalidLogin',
  // USER_ALREADY_EXISTS = 'userAlreadyExists',
  // USER_NOT_FOUND = 'userNotFound',
  // USER_NOT_ENABLED = 'userNotEnabled',
  ACCESS_DENIED = 'accessDenied',
  // INVALID_EMAIL_CODE = 'invalidEmailCode',
  // INVALID_CODE_RESEND = 'invalidCodeResend',
  // INVALID_VERIFICATION_CODE = 'invalidVerificationCode',

  // /* ------ ROOM ------ */
  // ROOM_NOT_FOUND = 'roomNotFound',
  // ROOM_NAME_EXISTS = 'roomNameExists',
  // ROOM_HAS_NO_IMAGE = 'roomHasNoImage',

  // /* ------ PLACE ------ */
  // USER_NOT_OWNER = 'userNotOwner',
  // PLACE_NAME_EXISTS = 'placeNameExists',

  // /* ------ PLACE ADDRESS ------ */
  // PLACE_ADDRESS_NOT_DEFINED = 'placeAddressNotDefined',
  // TIMEZONE_NOT_FOUND = 'timezoneNotFound',

  // /* ------ SHARE ------ */
  // INVALID_GUEST_USER = 'invalidGuestUser',
  // USER_ALREADY_JOINED_PLACE = 'userAlreadyJoinedPlace',
  // GUEST_OWNS_PLACE = 'guestOwnsPlace',
  // INVALID_ROOM_UID = 'invalidRoomUid',
  // SHARED_PLACE_NOT_FOUND = 'sharedPlaceNotFound',
  // PLACE_NOT_DISABLED = 'placeNotDisabled',
  // INVALID_SHARE_PROFILE = 'invalidShareProfile',
  // USER_NOT_JOINED_PLACE = 'userNotJoinedPlace',
  // INVALID_USER_TRANSFER = 'invalidUserTransfer',
  // USER_OWNS_PLACE = 'userOwnsPlace',
  // PLACE_NOT_FOUND = 'placeNotFound',
  // PROFILE_NO_PERMISSION = 'profileNoPermission',
  // ACTION_FORBIDDEN_FOR_ADMIN = 'actionForbiddenForAdmin',
  // INVALID_START_DATE = 'invalidStartDate',
  // INVALID_END_DATE = 'invalidEndDate',
  // INVALID_EMAIL_FORMAT = 'invalidEmailFormat',
  // INVALID_SHARING_DURATION = 'invalidSharingDuration',
  // ROOM_UIDS_MUST_BE_EMPTY = 'roomUidsMustBeEmpty',
  // SHARE_LIMIT_WITHOUT_USER_EXCEEDED = 'shareLimitWithoutUserExceeded',
  // SHARE_OUTSIDE_DURATION_WINDOW = 'shareOutsideDurationWindow',
  // INVALID_HUMIDITY = 'invalidHumidity',

  // /* ------ SCENES ------ */
  // SCENE_NOT_FOUND = 'sceneNotFound',
  // INVALID_SCENE_UID = 'invalidSceneUid',
  // SCENE_NAME_EXISTS = 'sceneNameExists',
  // INVALID_LOGICAL_OPERATOR = 'invalidLogicalOperator',
  // INVALID_CONDITIONS = 'invalidConditions',
  // INVALID_COMPARE_OPERATOR = 'invalidCompareOperator',
  // INVALID_TEMPERATURE = 'invalidTemperature',
  // INVALID_WEATHER = 'invalidClimate',
  // INVALID_SUNRISE_SUNSET = 'invalidSunriseSunset',
  // INVALID_VALUE = 'invalidValue',
  // INVALID_FREQUENCY = 'invalidFrequency',
  // INVALID_ACTIONS = 'invalidActions',
  // ONLY_ONE_CONDITION_ALLOWED = 'onlyOneConditionAllowed',
  // LOGICAL_OPERATOR_MUST_BE_EMPTY = 'logicalOperatorMustBeEmpty',
  // FREQUENCY_MUST_BE_EMPTY = 'frequencyMustBeEmpty',
  // FREQUENCY_REQUIRED = 'frequencyRequired',
  // CONDITIONS_REQUIRED = 'conditionsRequired',
  // LOGICAL_OPERATOR_REQUIRED = 'logicalOperatorRequired',
  // LAST_ACTION_CANNOT_BE_DELAY = 'lastActionCannotBeDelay',
  // INVALID_NOTIFICATION = 'invalidNotification',

  // /* ------ DEVICES ------ */
  // INVALID_DEVICE_UID = 'invalidDeviceUid',
  // INVALID_DEVICE_DATA = 'invalidDeviceData',
  // DUPLICATE_DEVICE_CHANNEL = 'duplicateDeviceChannel',
  // DEVICE_NOT_FOUND = 'deviceNotFound',
  // COMMAND_NOT_VALID = 'commandNotValid',
  // INVALID_COMMAND_UID = 'invalidCommandUid',

  // /* ------ GATEWAYS ------ */
  // INVALID_GATEWAY_UID = 'invalidGatewayUid',
  // GATEWAY_NOT_FOUND = 'gatewayNotFound',
  // INVALID_GATEWAY_CONNECTION_TYPE = 'invalidGatewayConnectionType',
  // SSID_REQUIRED = 'ssidRequired',

  // /* ------ ASSISTANTS ------ */
  // INVALID_CLIENT = 'invalidClient',
  // INVALID_CLIENT_ID = 'invalidClientId',
  // INVALID_CLIENT_SECRET = 'invalidClientSecret',
  // INVALID_REDIRECT_URI = 'invalidRedirectUri',
  // INVALID_GRANT_TYPE = 'invalidGrantType',
  // INVALID_REFRESH_TOKEN = 'invalidRefreshToken',
  // INVALID_ASSISTANT_ID = 'invalidAssistantId',

  // /* ------ DEVICE MIRRORINGS ------ */
  // DEVICE_MIRRORING_NOT_FOUND = 'deviceMirroringNotFound',
}
