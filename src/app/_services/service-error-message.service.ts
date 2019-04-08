import { Injectable } from '@angular/core';
import { ErrorCode } from '../_constants';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorMessage } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class ServiceErrorMessageService {

  constructor() {
  }

  getMessageOfCode(errorCode: ErrorCode): string {
    switch (errorCode) {
      case ErrorCode.UNKNOWN:
        return '服务报告发生了未知错误，请联系 bupt-spirit 团队';
      case ErrorCode.RAW_HTTP_ERROR:
        return '发生了未知错误，请联系 bupt-spirit 团队';
      case ErrorCode.ASSERTION:
        return '错误的请求格式';
      case ErrorCode.UNAUTHENTICATED:
        return '必须登陆以访问此资源';
      case ErrorCode.FORBIDDEN:
        return '权限不足';
      case ErrorCode.POST_SESSION_INVALID_USERNAME_OR_PASSWORD:
        return '错误的用户名或密码';
      case ErrorCode.GET_STUDENT_NO_SUCH_STUDENT:
        return '该学生账户不存在';
      case ErrorCode.POST_STUDENT_USERNAME_ALREADY_EXISTS:
        return '账户已存在';
      case ErrorCode.GET_NOTICE_NO_SUCH_NOTICE:
        return '公告不存在';
      case ErrorCode.PUT_NOTICE_NO_SUCH_NOTICE:
        return '公告不存在';
      case ErrorCode.DELETE_NOTICE_NO_SUCH_NOTICE:
        return '公告不存在';
      case ErrorCode.GET_TEACHER_NO_SUCH_TEACHER:
        return '教师不存在';
      case ErrorCode.POST_TEACHER_USERNAME_ALREADY_EXISTS:
        return '教师账户名已存在';
      case ErrorCode.GET_COURSE_NO_SUCH_COURSE:
        return '课程不存在';
      case ErrorCode.GET_APPLICATION_NO_SUCH_COURSE:
        return '课程不存在';
      case ErrorCode.POST_APPLICATION_NO_SUCH_COURSE:
        return '课程不存在';
      case ErrorCode.POST_APPLICATION_COURSE_CAN_NOT_BE_APPLIED:
        return '无法申请该课程';
      case ErrorCode.POST_APPLICATION_ALREADY_APPLIED:
        return '不能重复提交申请';
      case ErrorCode.PUT_APPLICATION_NO_SUCH_APPLICATION:
        return '申请不存在';
      case ErrorCode.PUT_APPLICATION_CAN_NOT_REJECT_APPLICATION_ALREADY_PASSED:
        return '无法拒绝已经通过的申请';
      default:
        return '发生了未知错误';
    }
  }

  getMessageOfStatus(status: number): string {
    return '发生了未知错误，请联系 bupt-spirit 团队';
  }

  getMessageOfResponse(errorResponse: HttpErrorResponse): string {
    if (errorResponse.error == null && errorResponse.error instanceof ErrorMessage) {
      return this.getMessageOfStatus(errorResponse.status);
    } else {
      const errorMessage: ErrorMessage = errorResponse.error;
      return this.getMessageOfCode(errorMessage.code);
    }
  }
}
