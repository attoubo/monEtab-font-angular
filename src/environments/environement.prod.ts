export const environmentProd = {
    baseUrl: 'http://localhost:8080/api',
      endPoint: {
        students: {
          getAll: "students",
          getOne: "students",
          getOneBySlug: "students/slug",
          create: "students",
          delete: "students"
        },
        teachers: {
        //   getListSubjectByIdForum: "teachers/forum",
          getOne: "teachers",
        //   getListSubjectBySlugForum: "teachers/slug",
          create: "teachers",
        },
        users: {
          getListMessageByIdSubject: "users",
          getOne: "users",
        //   getListMessageBySlugSubject: "users/slug",
          create: "users",
        },
      }
    }