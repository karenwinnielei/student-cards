const mockSearchData = [
  {
    _id: 'f1',
    title: 'Filter 1',
    emoticon: '📚',
  },
  {
    _id: 'f2',
    title: 'Filter 2',
    emoticon: '🧭',
  },
  {
    _id: 'f3',
    title: 'Filter 3',
    emoticon: '🖊️'
  },
  {
    _id: 'f4',
    title: 'Filter 4',
    emoticon: '🎒',
  },
  {
    _id: 'f5',
    title: 'Filter 5',
    emoticon: '📝',
  },
  {
    _id: 'f6',
    title: 'Filter 6',
    emoticon: '🏁',
  },
  {
    _id: 'f7',
    title: 'Filter 7',
    emoticon: '📎',
  },
  {
    _id: 'f8',
    title: 'Filter 8',
    emoticon: '💡',
  },
];

const mockStudentData = [
  {
    _id: 's1',
    filterIds: ['f1', 'f3', 'f4'],
    name: 'Student 1',
    university: 'Uni-Syd-1',
    gpa: 3.4,
    enroledPrograms: ['Program X'],
    completedPrograms: [],
    intent: 100,
    skillPoints: 89,
    profilePic:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  },
  {
    _id: 's2',
    filterIds: ['f1', 'f2', 'f5'],
    name: 'Student 2',
    university: 'Uni-Syd-2',
    gpa: 3.5,
    enroledPrograms: ['Program Y'],
    completedPrograms: ['Program A'],
    intent: 90,
    skillPoints: 94,
    profilePic:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  },
  {
    _id: 's3',
    filterIds: ['f1', 'f3', 'f6'],
    name: 'Student 3',
    university: 'Uni-Syd-3',
    gpa: 3.0,
    enroledPrograms: ['Program Z'],
    completedPrograms: [],
    intent: 88,
    skillPoints: 92,
    profilePic:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  },
];

export {
  mockSearchData,
  mockStudentData,
};